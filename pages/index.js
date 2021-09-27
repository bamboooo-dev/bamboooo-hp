import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { PieChartTwoTone } from '@material-ui/icons';
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
      height:'70vh',
      backgroundSize:'100vw 70vh',
      paddingTop:'7vh',
    },
  },
  mainText1:{
    fontFamily:'Corporate-Logo-Medium-ver2', 
    color:'#19807B',
    [theme.breakpoints.down('777')]: {
      fontSize:'40px'
    },
  },
  mainText2:{
    whiteSpace: "pre-line", 
    marginTop:'4.5vw', 
    lineHeight:'2.5',
    [theme.breakpoints.down('777')]: {
      paddingLeft:'10px',
      paddingRight:'10px',
      fontSize:'14px',
      marginTop:'4.5vh',
    },
  },
  toAboutButton:{
    marginTop:'4.5vw',
    fontFamily:'Corporate-Logo-Medium-ver2',
    display:'inline-block',
    border:'0px none',
    background:'transparent',
    [theme.breakpoints.down('777')]: {
      fontSize:'14px',
      marginTop:'4.5vh',
    },
  },
  mainContainer: {
    paddingTop:'10px',
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom:'50px',
    [theme.breakpoints.down('777')]: {
      paddingLeft:'10px',
      paddingRight:'10px',
    },
  },
  applicationIcon:{
    color:'#19807B',
    display:'flex',
    alignItems:'center',
    textDecoration:'none',
    padding:'10px', 
    margin:'-10px',
  },
  mediaWorks:{
    width:"23vw",
    [theme.breakpoints.down('777')]: {
      width:'25vh',
    },
  },
  mediaSection:{
    width:"250px",
    marginBottom:"40px",
  },
  mediaWaiwai:{
    width:"19.5vw",
    marginBottom:"1.8vw",
    [theme.breakpoints.down('777')]: {
      width:'25vh',
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
    right:"0px", 
    bottom:"25px",
    opacity:"0.6", 
  "&:hover":{
    opacity:1,
    }
  }
}));



export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.up('777'));
 


  return (
    <Box>
      <img src={isSP ? 'top_main_image1.png' : 'top_main_imageSP.png'} className={classes.mainImage} />
      <MainTextBox />
        <Box className={classes.mainContainer}>
            <Applications />
            <Grid container>
              <News />
              <Grid item xs={1} />
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
          {`このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。
          このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。
          このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。`}
        </Typography>

        <button class={classes.toAboutButton}>
          <a href='https://bamboooo.net/about' style={{textDecoration:'none', color:'black', padding:'20px', margin:'-20px'}}>
            <span style={{fontFamily:'Corporate-Logo-Medium-ver2', fontSize:'30px'}}>More</span>
            <ArrowForwardIosIcon style={{color:'#19807B', marginLeft:'10px'}}/>
          </a>
        </button>
      </Box>
    </Box>
  )
}

const Applications = () =>{ 
  const classes = useStyles(); 
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.up('777'));

  return(
    <Box pt="40px" pb="75px" mb="75px" borderBottom="1px solid grey">
      <Grid container> 
        <Grid item xs={12} style={{paddingBottom:'50px'}}>
          <a href='https://bamboooo.net/works' className={classes.applicationIcon}>
            <PhoneIphoneIcon style={{fontSize:'50px'}}/>
            <Typography style={{fontFamily:'Corporate-Logo-Medium-ver2', fontSize:'35px', marginRight:'10px'}}>
              Applications
            </Typography>
            <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
          </a>
        </Grid>
        <Grid item xs={12} sm={4} align="center" style={{paddingBottom:'30px'}}>
          <img src='/waiwai.png' alt='picture of waiwai' className={classes.mediaWaiwai} />
          <Typography variant="h5" gutterBottom>ワイワイ</Typography>
          <Typography>あなたの価値観でみんながワイワイ</Typography>
        </Grid>

        <Grid item xs={12} sm={4} align="center" style={{paddingBottom:'30px'}}>
          <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
          <Typography variant="h5" gutterBottom>memopic</Typography>
          <Typography>旅の思い出をプレイリストで振り返ろう</Typography>
        </Grid>

        <Grid item xs={12} sm={4} align="center">
          <img src='/memorip.png' alt='picture of memorip' className={classes.mediaWorks} />
          <Typography variant="h5" gutterBottom>Memorip</Typography>
          <Typography>旅行プラン作成・共有サイト</Typography>
        </Grid>

      </Grid>     
    </Box>
  )
}

const ListItemLink = (props) => {
  return (
    <ListItem button component="a" {...props} />
  )
}

const News = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.up('777'));

  return(
    <Grid item xs={12} sm={7} container>
      <Box width='60%'>
        <a href='https://bamboooo.net/works' className={classes.applicationIcon} style={{target:'brank'}}>
          <AnnouncementIcon style={{fontSize:'50px'}}/>
          <Typography style={{fontFamily:'Corporate-Logo-Medium-ver2', fontSize:'35px', marginLeft:'10px', marginRight:'10px'}}>
            News
          </Typography>
          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
        </a>
      </Box>
      {/*本来はblogの埋め込みとか*/}
      <Box mt={isSP ? '-100px' : '0'} mb={isSP ? '0' : '50px'}>
        <List component="nav">

          <ListItemLink target="_blank" href="https://twitter.com/bamboooo_inc/status/1415249202657972229?s=20">
            <ListItemText primary="2021.7.14   『ワイワイ』ver1.83をリリースしました。" />
          </ListItemLink>

          <Divider />
        
          <ListItemLink target="_blank" href="https://twitter.com/bamboooo_inc/status/1413114702423420931?s=20">   
            <ListItemText primary="2021.7.8   『ワイワイ』ver1.82をリリースしました。" />
          </ListItemLink>

          <Divider />

          <ListItemLink target="_blank" href="https://twitter.com/bamboooo_inc/status/1412371686511448071?s=20">
            <ListItemText primary="2021.7.6   『ワイワイ』のユーザー数が1000人を超えました！！" />
          </ListItemLink>

          <Divider />

          <ListItemLink target="_blank" href="https://twitter.com/bamboooo_inc/status/1382198040774078464?s=20">
            <ListItemText primary="2021.6.23  『ワイワイ』ver1.80をリリースしました。" />
          </ListItemLink>

          <Divider />

          <ListItemLink target="_blank" href="https://twitter.com/bamboooo_inc/status/1407546420920414210?s=20">
            <ListItemText primary="2021.4.14  スマホ向けアプリ『ワイワイ』をリリースしました。" />
          </ListItemLink>

          <Divider />

        </List>
      </Box>
    </Grid>
  )
}

const Twitter = () =>{
  const classes = useStyles();

  return(
    <Grid item xs={12} sm={4}>
      <Box>
        <a href='https://twitter.com/bamboooo_inc' target='_blank' className={classes.applicationIcon} >
          <TwitterIcon style={{fontSize:'50px'}}/>
          <Typography style={{fontFamily:'Corporate-Logo-Medium-ver2', fontSize:'35px', marginLeft:'10px', marginRight:'10px'}}>
            Twitter
          </Typography>
          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
        </a>
      </Box>
      <Box mt="30px" align="center" >    
        <Box border='1px solid #E4ECEE'>
          <a className="twitter-timeline" 
            data-lang="ja" 
            data-width="350" 
            data-height="350" 
            data-chrome="nofooter noheader"
            href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw">
              Tweets by bamboooo_inc
          </a> 
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </Box>
        <Box>
          <button className={classes.twitterFollowButton}>
            <a href="https://twitter.com/intent/follow?screen_name=bamboooo_inc"
              target='_blank'
              className={classes.twitterFollowIcon}>
              <TwitterIcon />
              <Typography>フォローする</Typography>
            </a>
          </button>
          {/* <a href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw" 
            className="twitter-follow-button" 
            data-width="large" 
            data-show-screen-name="false" 
            data-lang="ja" 
            data-show-count="false">
              Follow @bamboooo_inc
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
        </Box>
      </Box>
    </Grid>
  )
}

const ReturnTopButton = () => {
  const classes = useStyles();

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button onClick={returnTop} className={classes.topButton}>
      <img src="TOP.jpg" width="50px" />
    </Button>
  )
}
