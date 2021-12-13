import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainImage:{
    width:'100%',
    marginTop:'-100px',
    [theme.breakpoints.down('777')]: {
    },
  },
  mainTextBox:{
    backgroundImage:'url(/top_main_image2.png)',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    height:'44vw',
    paddingTop:'7vw',
    textAlign:'center',
    [theme.breakpoints.down('777')]: {
      backgroundImage:'none',
      textAlign:'left',
      height:'60vh',
      backgroundSize:'100vw 70vh',
      marginTop:'10vh',
      paddingTop:'7vh',
    },
  },
  mainText1:{
    fontFamily:'Corporate-Logo-Medium-ver2', 
    color:'#19807B',
    [theme.breakpoints.down('777')]: {
      fontSize:'25px',
      marginLeft:'20px',
    },
  },
  mainText2:{
    whiteSpace: "pre-line", 
    marginTop:'4.5vw', 
    lineHeight:'2.5',
    [theme.breakpoints.down('777')]: {
      paddingLeft:'15px',
      paddingRight:'15px',
      fontSize:'14px',
      marginTop:'4.5vh',
    },
  },
  toAboutButton:{
    marginTop:'4.5vw',
    fontFamily:'Corporate-Logo-Medium-ver2',
    border:'0px none',
    background:'transparent',
    [theme.breakpoints.down('777')]: {
      fontSize:'14px',
      marginTop:'2vh',
      float:'right',
      marginRight:'15px',
    },
    '&:hover': {
      opacity:'0.5',
    },
  },
  mainContainer: {
    paddingTop:'30px',
    paddingLeft: '50px',
    paddingRight: '75px',
    paddingBottom:'75px',
    [theme.breakpoints.down('777')]: {
      paddingLeft:'10px',
      paddingRight:'10px',
    },
  },
  moreText:{
    fontFamily:'Corporate-Logo-Medium-ver2', 
    fontSize:'18px',
    [theme.breakpoints.down('777')]: {
      fontSize:'14px',
    },
  },
  moreArrowIcon:{
    color:'#19807B', 
    marginLeft:'10px',
    fontSize:'18px',
    [theme.breakpoints.down('777')]: {
      fontSize:'12px',
    },
  },
  applicationBox:{
    paddingTop:'40px', 
    paddingBottom:'150px', 
    marginBottom:'150px', 
    borderBottom:'1px solid #CACACA',
    [theme.breakpoints.down('777')]: {
      paddingBottom:'0',
      marginBottom:'100px',
      borderBottom:'none',
    },
  },
  logoButton:{
    border:'0px none',
    background:'transparent',
    '&:hover': {
      opacity:'0.8',
    },
  },
  logoIcon:{
    color:'#19807B',
    display:'flex',
    alignItems:'center',
    textDecoration:'none',
    padding:'10px', 
    margin:'-10px',
    '&:hover': {
      opacity:'0.5',
    },
  },
  logoText:{
    fontFamily:'Corporate-Logo-Medium-ver2', 
    fontSize:'35px', 
    marginRight:'10px',
    [theme.breakpoints.down('777')]: {
      fontSize:'25px',
    },
  },
  applicationScrollBox:{
    display:'flex',
    overflow:'scroll',
  },
  applicationName:{
    fontSize:'24px',
    [theme.breakpoints.down('777')]: {
      fontSize:'18px',
    },
  },
  applicationText:{
    fontSize:'16px',
    [theme.breakpoints.down('777')]: {
      fontSize:'14px',
    },
  },
  mediaWorks:{
    width:"23vw",
    border:'1px solid #CACACA',
    borderRadius:'5px',
    [theme.breakpoints.down('777')]: {
      width:'auto',
      height:'20vh',
    },
  },
  mediaWaiwai:{
    width:"24.5vw",
    marginBottom:"1vw",
    border:'1px solid #CACACA',
    borderRadius:'5px',
    [theme.breakpoints.down('777')]: {
      width:'auto',
      height:'20vh',
    },
  },
  newsMainBox:{
    height:'300px',
    display:'flex',
    flexFlow:'column',
    overflow:'scroll',
    [theme.breakpoints.down('777')]: {
      marginTop:'0',
      marginBottom:'100px',
      paddingLeft:'5px',
    },
  },
  newsItemBox:{
    height:'75px',
    display:'flex',
    flexWrap:'wrap',
    alignItems:'center',
    borderBottom:'1px solid #E6E6E6',
  },
  newsItemButton:{
    display:'flex',
    flexFlow:'row',
    alignItems:'center',
    textDecoration:'none',
    color:'black',
    '&:hover': {
      opacity:'0.5',
      backgroundColor:'#E7EAED',
      cursor:'pointer',
    },
  },
  newsDateBox:{
    width:'8vw',
    paddingLeft:'5px',
    [theme.breakpoints.down('777')]: {
      fontSize:'10px',
      width:'15vw',
    },
  },
  newsCategoryBox:{
    border:'1px solid #19807B',
    borderRadius:'20px',
    color:'#19807B',
    textAlign:'center',
    width:'10vw',
    [theme.breakpoints.down('777')]: {
      marginLeft:'5px',
      fontSize:'10px',
      width:'20vw',
    },
  },
  newsTextBox:{
    width:'32vw', 
    marginLeft:'15px',
    [theme.breakpoints.down('777')]: {
      marginTop:'-10px',
      fontSize:'12px',
      marginLeft:'0',
      width:'90vw'
    },
  },
  twitterFollowIcon:{
    display:'flex',
    alignItems:'center',
    textDecoration:'none',
    padding:'5px', 
    margin:'-5px',
    color:'white',
  },
  twitterFollowButton:{
    marginTop:'15px',
    border:'none',
    backgroundColor:'#0091E7',
    borderRadius:'3px',
    width:'auto',
    padding:'5px 10px'    
  },
  topButton:{
    position:"fixed",
    right:"54px", 
    bottom:"25px",
    opacity:"0.6", 
    zIndex:'10',
    backgroundColor:'transparent',
    borderRadius:'50%',
    [theme.breakpoints.down('777')]: {
      opacity:1,
      right:'9px',
    },
  "&:hover":{
    opacity:1,
    },
  }
}));



export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('777'));
 


  return (
    <Box>
      <img src={isPC ? 'top_main_image1.png' : 'top_main_imageSP.png'} className={classes.mainImage} />
      <MainTextBox />
        <Box className={classes.mainContainer}>
            <Applications />
            <Grid container>
              <News />
              <Grid item sm={1} />
              <Twitter />  
            </Grid>
        </Box>
        <ReturnTopButton />
    </Box>
  );
}

const MainTextBox = () =>{
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.mainTextBox}>
        <Typography variant='h3' className={classes.mainText1}>
          Colors your life.
        </Typography> 

        <Typography variant='h6' className={classes.mainText2}>
          {`エンターテインメントは、人々の人生を大きく変える可能性を秘めています。
            新しい出会いや体験を通して見える世界が広がり、日々の過ごし方や人との接し方変わる。
            そうして日常が変化することで新たな出会いが増え、さらに見える世界が広がる。
            このポジティブなサイクルをユーザーの方々に提供し、エンターテイメント×テクノロジーの力で人々の人生が色づくことを目指しています。`}
        </Typography>

        <button class={classes.toAboutButton}>
          <a href='https://bamboooo.net/about' style={{textDecoration:'none', color:'black', padding:'20px', margin:'-20px'}}>
            <span className={classes.moreText}>More</span>
            <ArrowForwardIosIcon className={classes.moreArrowIcon}/>
          </a>
        </button>
      </Box>
    </Box>
  )
}

const Applications = () =>{ 
  const classes = useStyles(); 
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('777'));

  return(
    <Box className={classes.applicationBox}>
      {isPC ? 
      // PCでのアプリ横並べ（非横スクロール）
      <Grid container> 
        <Grid item xs={12} style={{paddingBottom:'50px'}}>
        <button className={classes.logoButton}>
          <a href='/works' className={classes.logoIcon}>
            <PhoneIphoneIcon style={isPC ? {fontSize:'50px'} : {fontSize:'35px'}}/>
            <Typography className={classes.logoText}>
              Applications
            </Typography>
            <ArrowForwardIosIcon style={isPC ? {fontSize:'20px'} : {fontSize:'12px'}}/>
          </a>
        </button>
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <img src='/waiwai_history.png' alt='picture of waiwai' className={classes.mediaWaiwai} />
          <Typography className={classes.applicationName} gutterBottom>ワイワイ</Typography>
          <Typography className={classes.applicationText}>あなたの価値観でみんながワイワイ</Typography>
        </Grid>

        <Grid item xs={12} sm={4} align="center">
          <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
          <Typography className={classes.applicationName} gutterBottom>memopic</Typography>
          <Typography className={classes.applicationText}>旅の思い出をプレイリストで振り返ろう</Typography>
        </Grid>

        <Grid item xs={12} sm={4} align="center">
          <img src='/memorip.png' alt='picture of memorip' className={classes.mediaWorks} />
          <Typography className={classes.applicationName} gutterBottom>Memorip</Typography>
          <Typography className={classes.applicationText}>旅行プラン作成・共有サイト</Typography>
        </Grid>

      </Grid>     
:
        // SPでのアプリ横スクロール
       <>
        <Box style={{paddingBottom:'50px'}}>
          <button className={classes.logoButton}>
            <a href='/works' className={classes.logoIcon}>
              <PhoneIphoneIcon style={isPC ? {fontSize:'50px'} : {fontSize:'35px'}}/>
              <Typography className={classes.logoText}>
                Applications
              </Typography>
              <ArrowForwardIosIcon style={isPC ? {fontSize:'20px'} : {fontSize:'12px'}}/>
            </a>
          </button>
        </Box>
        <Box className={classes.applicationScrollBox}>
          <Box align="center" style={{paddingBottom:'30px'}}>
            <img src='/waiwai_history.png' alt='picture of waiwai' className={classes.mediaWaiwai} />
            <Typography className={classes.applicationName} gutterBottom>ワイワイ</Typography>
            <Typography className={classes.applicationText}>あなたの価値観でみんながワイワイ</Typography>
          </Box>

          <Box align="center" style={{paddingBottom:'30px'}}>
            <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
            <Typography className={classes.applicationName} gutterBottom>memopic</Typography>
            <Typography className={classes.applicationText}>旅の思い出をプレイリストで振り返ろう</Typography>
          </Box>

          <Box align="center">
            <img src='/memorip.png' alt='picture of memorip' className={classes.mediaWorks} />
            <Typography className={classes.applicationName} gutterBottom>Memorip</Typography>
            <Typography className={classes.applicationText}>旅行プラン作成・共有サイト</Typography>
          </Box>
        </Box>
        </>
      }

    </Box>
  )
}

const newsItems = [
  // 上に新しいnewsを追加していく
  {
    date:'2021.12.10',
    category:'お知らせ',
    text:'『ワイワイ』のユーザー数が3500人を超えました！！',
    link:'https://bamboooo.net/works'
  },
  {
    date:'2021.12.7',
    category:'お知らせ',
    text:'『エモー』のLINEスタンプが登場しました！！',
    link:'https://store.line.me/stickershop/product/16819182/ja',
  },
  {
    date: '2021.10.19',
    category: 'ブログ',
    text:'ブログを更新しました',
    link:'https://mixil.mixi.co.jp/people/12794',
  },
  {
    date: '2021.7.14',
    category: 'アップデート',
    text: '『ワイワイ』ver1.83をリリースしました。',
    link: 'https://twitter.com/bamboooo_inc/status/1415249202657972229?s=20',
  },
  {
    date: '2021.7.8',
    category: 'アップデート',
    text: '『ワイワイ』ver1.82をリリースしました。',
    link: 'https://twitter.com/bamboooo_inc/status/1407546420920414210?s=20',
  },
  {
    date: '2021.7.6',
    category: 'お知らせ',
    text: '『ワイワイ』のユーザー数が1000人を超えました！！',
    link: 'https://twitter.com/bamboooo_inc/status/1412371686511448071?s=20',
  },
  {
    date: '2021.6.23',
    category: 'アップデート',
    text: '『ワイワイ』ver1.80をリリースしました。',
    link: 'https://twitter.com/bamboooo_inc/status/1382198040774078464?s=20',
  },
  {
    date: '2021.4.14',
    category: 'お知らせ',
    text: 'スマホ向けアプリ『ワイワイ』をリリースしました。',
    link: 'https://twitter.com/bamboooo_inc/status/1407546420920414210?s=20',
  },
];

function NewsItem(props) {
  const {newsItem} = props;
  const classes = useStyles();

  return (
    <a href={newsItem.link} target='_blank' className={classes.newsItemButton}>
    <Box className={classes.newsItemBox}>

        <Typography className={classes.newsDateBox}>
          {newsItem.date}
        </Typography>

          <Typography className={classes.newsCategoryBox}>
            {newsItem.category}
          </Typography>

        <Typography className={classes.newsTextBox}>
          {newsItem.text}
        </Typography>
      
    </Box>
    </a>
  )
}

const News = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('777'));

  return(
    <Grid item xs={12} sm={7} container>
      <Box >
        <button className={classes.logoButton}>
          <a href='/works/1' className={classes.logoIcon}>
            <AnnouncementIcon style={isPC ? {fontSize:'50px'} : {fontSize:'35px'}}/>
            <Typography className={classes.logoText} style={{marginLeft:'10px', marginRight:'10px'}}>
              News
            </Typography>
            <ArrowForwardIosIcon style={isPC ? {fontSize:'20px'} : {fontSize:'12px'}}/>
          </a>
        </button>
      </Box>
      {/*newsItemsをmapで*/}
      <Box className={classes.newsMainBox}>
        {newsItems.map((newsItem) => (
          <NewsItem key={newsItem.text} newsItem={newsItem} />
        ))}
      </Box>
    </Grid>
  )
}

const Twitter = () =>{
  const classes = useStyles();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('777'));


  return(
    <Grid item xs={12} sm={4}>
      <Box >
      <button className={classes.logoButton}>
        <a href='https://twitter.com/bamboooo_inc' target='_blank' className={classes.logoIcon} >
          <TwitterIcon style={isPC ? {fontSize:'50px'} : {fontSize:'35px'}}/>
          <Typography className={classes.logoText} style={{marginLeft:'10px', marginRight:'10px'}}>
            Twitter
          </Typography>
          <ArrowForwardIosIcon style={isPC ? {fontSize:'20px'} : {fontSize:'12px'}}/>
        </a>
      </button>
      </Box>
      <Box mt="30px" align="center" >    
        <Box border='1px solid #E4ECEE' width='330px'>
          <a className="twitter-timeline" 
            data-lang="ja" 
            data-width="300" 
            data-height="300" 
            data-chrome="nofooter noheader"
            href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw">
              Tweets by bamboooo_inc
          </a> 
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </Box>

        {/* twitterフォローボタン（実装するなら）
        <Box>
          <button className={classes.twitterFollowButton}>
            <a href="https://twitter.com/intent/follow?screen_name=bamboooo_inc"
              target='_blank'
              className={classes.twitterFollowIcon}>
              <TwitterIcon />
              <Typography>フォローする</Typography>
            </a>
          </button>
        </Box> */}
      </Box>
    </Grid>
  )
}

const ReturnTopButton = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('777'));

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button onClick={returnTop} className={classes.topButton}>
      <img src="TOP.png" width={isPC ? "56px" : '48px'} />
    </Button>
  )
}
