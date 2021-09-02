import XMLParser from 'xml2js';

const cheerio = require('cheerio');

const additionalPosts = [
  {
    title: 'DX Squad でのインターンで学んだエンジニアとして大切な5つのこと',
    url: 'https://www.wantedly.com/companies/wantedly/post_articles/339269',
    date: '2021.07.30',
    author: '山本 浩平',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=1200,dh=630,da=s,ds=s,cw=1200,ch=630,cc=FFFFFF,of=webp)/assets/images/7278227/original/photo-1581093804475-577d72e38aa0?1627641971',
    imageText: 'Image Text',
    lead: `こんにちは 👋 DX Squad でインターンをしている山本です。

    7月いっぱいでインターンが終了になるので、今回のインターンで学んだことを振り返ろうと思います。
    
    技術的なスキルといったいわゆるハードスキル以外に、仕事に対する姿勢・考え方などソフトスキル面でも非常に学びが多かったので今回はそちらについてまとめていこうと思います。
    
    Wantedly のインターンを検討している方や DX Squad に興味のある方々の参考になれば嬉しいです。`.substring(0, 80),
  },
  {
    title: 'Custom Controller を作ってデプロイ開始と終了の検知を実現した話',
    url: 'https://www.wantedly.com/companies/wantedly/post_articles/339271',
    date: '2021.07.30',
    author: '山本 浩平',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=1200,dh=630,da=s,ds=s,cw=1200,ch=630,cc=FFFFFF,of=webp)/assets/images/7278225/original/photo-1598518142144-68fdb94156e5?1627641971',
    imageText: 'Image Text',
    lead: `こんにちは 👋

    DX Squad でインターンをしている山本です。
    
    今回はインターンの課題として取り組んだ Custom Controller を作ってデプロイ開始と終了の検知を実現した話 についてまとめようと思います 👨‍💻`.substring(0, 80),
  },
  {
    title: 'Unity で gRPC するまで',
    url: 'https://zenn.dev/monaka0721/articles/82f7c9d3a91806',
    date: '2021.01.26',
    author: 'MONAKA',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://res.cloudinary.com/zenn/image/upload/s--vnJcz_Tp--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:MONAKA%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_80_bold:Unity%2520%25E3%2581%25A7%2520gRPC%2520%25E3%2581%2599%25E3%2582%258B%25E3%2581%25BE%25E3%2581%25A7%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2o1a1NlN2stR1Y0WVVpWi1qRFlWSnlrQXJEMklVUXFSV1owcl9rVjhnPXM4MC1j%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png',
    imageText: 'Image Text',
    lead: `こんにちは、bamboooo の住江です
    bamboooo として新たにゲーム開発を始めて、サーバサイドは Golang、クライアントは Unity で C# と型のある言語を採用したので、せっかくだから通信を gRPC により行うことにしました
    今回は Unity で gRPC 通信を行うまでのチュートリアルを記します`.substring(0, 80),
  },
]

export async function getSortedPostsData(urls){
  const parsed_xmls = await Promise.all(urls.map(async url => {
    const xml = await fetchXML(url)
    return await XMLParser.parseStringPromise(xml).catch(null);
  }));
  const entries = extractEntries(parsed_xmls);
  const posts = await fetchOGPLinkAndFormat(entries);
  return sortPosts(posts.concat(additionalPosts));
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
      lead: entry.content[0]._.substring(0, 80),
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

function sortPosts(posts) {
  posts.sort((a,b) => {
    if (a.date < b.date) return 1
    else return -1;
  })
  return posts
}
