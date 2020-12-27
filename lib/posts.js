import XMLParser from 'xml2js';

const cheerio = require('cheerio');

export async function getSortedPostsData(urls){
  const yuya_url = urls[0];
  const kohei_url = urls[1];
  const yuya_xml = await fetchQiitaXML(yuya_url);
  const yuya_parsed_xml = await XMLParser.parseStringPromise(yuya_xml).catch(null);
  const kohei_xml = await fetchQiitaXML(kohei_url);
  const kohei_parsed_xml = await XMLParser.parseStringPromise(kohei_xml).catch(null);
  const xmls = [yuya_parsed_xml, kohei_parsed_xml]
  console.log(xmls);
  const url = "https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494";
  const link = await getOGPLink(url);
  console.log(link);

  const posts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
  return posts;
}

async function fetchQiitaXML(url){
  try{
    const response = await fetch(url);
    const xml = await response.text();
    return xml;
  }catch(err){
    console.error('Qiita fetch Error', err);
    return null;
  }
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
