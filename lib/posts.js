import XMLParser from 'xml2js';

const cheerio = require('cheerio');

export async function getSortedPostsData(urls){
  const parsed_xmls = await Promise.all(urls.map(async url => {
    const xml = await fetchXML(url)
    return await XMLParser.parseStringPromise(xml).catch(null);
  }));
  const entries = extractEntries(parsed_xmls);
  const posts = await fetchOGPLinkAndFormat(entries);
  return posts;
}

async function fetchXML(url){
  try{
    const response = await fetch(url);
    const xml = await response.text();
    return xml;
  }catch(err){
    console.error('XML fetch Error', err);
    return null;
  }
}

function extractEntries(parsed_xmls){
  const entries = [];
  parsed_xmls.forEach((parsed_xml) => {
    parsed_xml.feed.entry.forEach((entry) => {
      entries.push(entry);
    })
  })
  return entries
}

async function fetchOGPLinkAndFormat(entries){
  entries.sort((a,b) => {
    if (a.updated[0] < b.updated[0]) return 1
    else return -1;
  })
  const posts = await Promise.all(entries.map(async entry => {
    const OGPLink = await getOGPLink(entry.url[0]);
    const post = {
      title: entry.title[0],
      url: entry.url[0],
      date: formatDate(new Date(entry.updated[0]), 'yyyy.MM.dd'),
      author: entry.author[0].name[0],
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: OGPLink,
      imageText: 'Image Text',
    }
    return post;
  }));
  return posts;
}

async function getOGPLink(url){
  const metaProps = await getMetaProps(url);
  return resolveImageUrl(metaProps);
}

async function getMetaProps(url) {
  const result = await fetch(url).then(res => {
      if (res.ok) { return res.text() }
    }).then(html => {
      const metaProps = extractMetaProps(html)
      return metaProps
    }).catch(e => {
      throw e
    })
  return result
}

function resolveImageUrl(metaProps) {
  const ogImage = getMetaPropContent(metaProps, 'og:image')
  if (ogImage) return ogImage
  return ''
}

function getMetaPropContent(metaProps, propKey) {
  const mpObj = metaProps.find((d, i, arr) => {
    return d[propKey]
  })
  if (mpObj) return mpObj[propKey]
  return ''
}

function extractMetaProps(html) {
  const $ = cheerio.load(html)
  let results = []
  $('head meta').each((i, el) => {
    const property = $(el).attr('property')
    const content = $(el).attr('content')
    if (property && content) {
      results.push({ [property]: content })
    }
  })
  results.sort((a,b) => {
    if (Object.keys(a)[0] < Object.keys(b)[0]) return -1
    if (Object.keys(a)[0] > Object.keys(b)[0]) return 1
    return 0
  })
  return results
}

function formatDate (date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
};
