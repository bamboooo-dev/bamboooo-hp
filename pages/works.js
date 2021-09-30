import { FormHelperText, Icon, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import grey from "@material-ui/core/colors/grey";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  mainDiv:{
    zIndex:'1',
    backgroundImage: "url(/header.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down('777')]: {
      backgroundImage: "url(/header.png)",
    },
  },

  TopContainer: {
    maxWidth:'1000px',
    margin:"0 auto",
    paddingTop:"25vw",
    
  },


  shadowBox: {
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, .3)",
    marginBottom: "100px",
    [theme.breakpoints.down('777')]: {
      marginBottom: "50px",
    },
    backgroundColor:"white",
  },

  content: {
    width: '100%',
    display:'flex' ,
    flexFlow:'column',
    justifyContent:'sapce-around',
    alignItems:'center',
    paddingTop:120,
    paddingBottom:100,
  },

  /*上寄せにしたい*/
  media: {
    borderWidth: 1,
    border: "solid", 
    borderRadius: 5,
    borderColor: grey[300],
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: 400,
      height: 260,
      display: 'flex',
    },
  },
  
  /*
  mediaWaiwai: {
    borderWidth: 1,
    border: "none",
    borderRadius: 5,
    borderColor: grey[300],
    width: '100%',
    

    [theme.breakpoints.up('sm')]: {
      width: 400,
      height: 260,
      display: 'flex',
    },
  },*/
  mainContainer: {
    marginTop: theme.spacing(5),

/*
    maxWidth:'1000px',
    margin:"0 auto",
    paddingTop:"25vw",
    [theme.breakpoints.down('777')]: {
      width:"90%",
      paddingTop:"50vw",
    
    position:'auto',
    ここらへんの位置をかえればいい感じになると思う
  },
  */

},
  description: {

/*これがないほうが改行は変かもしれないけどすっきりする
    whiteSpace: "pre-line",*/

    lineHeight: 2,
    width: 400,
    height: 170,
    display: 'flex',
  },

  genreIcon:{

    borderRadius:"20px",
    border:"none",
    width:"40%",
    backgroundColor:"#CC33FF",
    float:"right",
    paddingTop:"3px",
    fontSize:"15px",
    textAlign:"center",
    [theme.breakpoints.down('777')]: {
      paddingTop:"2px",
      fontSize:"10px",
    },
  },
}));

const works = [
  { 
    name: 'ワイワイ',
    catchphrase: 'あなたの価値観でみんながワイワイ',
   /* url:"https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
   公式HP載せたい*/
    alt: 'Picture of waiwai',
    image: '/waiwai_work.png',
    description: `
      オンラインでオフライン以上にワイワイする。
      「ワイワイ」はおしゃべりしながらオンライン対戦できる心理ゲームで、
      Among Us の次に流行ると巷で噂されてます。
      キャラクター(エモー)もかわいいので、テンションも上がること間違いなし！
      自分の性格、センス、価値観が問われるので仲間内はもちろん、
      初対面の人の事も手っ取り早く知る日ことが出来ます。`,
    release:'リリース　　2021年 4月',
    appleUrl: "https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
    googleUrl: "https://play.google.com/store/apps/details?id=com.bamboooo.waiwai",
    backgroundColor:'#D4A7D9',
    genre:'ゲーム',
    gameUrl:"https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
  },
  { 
    name: 'memopic',
    catchphrase: '旅の思い出をプレイリストで振り返ろう',
    url: 'https://www.memopic.net',
    alt: 'Picture of memopic',
    image: '/memopic_work.png',
    description: `
      旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです`,
    release:'リリース　　2020年 9月',
    appleUrl: "https://apps.apple.com/us/app/memopic/id1527852844",
    googleUrl: "https://play.google.com/store/apps/details?id=com.memopic",
    backgroundColor:'#F5BD70',
    genre:'便利系',
    gameUrl:"https://apps.apple.com/us/app/memopic/id1527852844",
  },
  { 
    name: 'Memorip',
    catchphrase: '旅行プラン作成・共有サイト',
    url: 'https://memorip.net',
    alt: 'Picture of Memorip',
    image: '/memorip_work.png',
    description: `
      『Memorip』では直感的にプランを作成したり
      簡単にプランを共有したりすることができます
      これからの旅行のしおりとして、また
      他の人のプランを参考にして作成できます`,
    release:'リリース　　2019年 12月',
    backgroundColor:'#99FFFF',
    genre:'連絡系',
  },
  /* 新しいアプリがリリースor決定したら追加
  { 
    name: 'MESHIBUGYO',
    catchphrase: 'あなただけのサブカル発掘アプリ',
    alt: 'Picture of MESHIBUGYO',
    description: 'あなただけのサブカルを見つけるには間違いなし！',
    backgroundColor:'#FF6666',
    genre:'文化系',
    
  },
  */
];

function Work(props) {
  const classes = useStyles();
  const { work } = props; 
  return (
   <Grid container>
     <Grid item container xs={4} md={12} display="flex" >
        <Grid item className={classes.content} md={12} >
          <Box display="flex" >
            {work.image ? (
              <Box
              paddingRight={5}
              paddingLeft={5}>
                <img
                  src={work.image}
                  alt={work.alt}
                    className={classes.media} />
              </Box>
            ) : (
              <Box
                className={classes.media}
                height={260}
                mb={1}
              >
                <Typography variant="h4">
                  COMING SOON...
                </Typography>
              </Box>
            )}
          
            <Box xs={4}>
              <div className={classes.genreIcon} style={{backgroundColor: work.backgroundColor}}>
               {work.genre}
              </div>            
              <Typography gutterBottom variant="h4" component="h2">
                <a href={work.gameUrl}
                   target="_blank"
                   style={{
                     color:"black",
                     textDecoration:"none"
                   }}>
                 {work.name}
                </a>
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {work.catchphrase}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p" gutterBottom className={classes.description}>
                {work.description}
              </Typography>
              <Typography variant="body3" color="textSecondary" component="p" gutterBottom className={classes.release}>
                {work.release}
              </Typography>
              {work.url && (
                <Box my={1}>
                  <Button variant="outlined" href={work.url} target="_blank">公式サイトへ</Button>
                </Box>
              )}
              {(work.appleUrl || work.googleUrl) && (
                <Box display="flex" alignItems="center">
                  {work.appleUrl && (
                    <Box>
                      <a href={work.appleUrl} target="_blank">
                        <img
                          src="/app-store-badge.png"
                          alt="App Store Badge" />
                      </a>
                    </Box>
                  )}
                  {work.googleUrl && (
                    <Box>
                      <a href={work.googleUrl} target="_blank">
                        <img
                          src="/google-play-badge.png"
                          alt="Google Play Store Badge"
                          height={60} />
                      </a>
                    </Box>
                  )}
                </Box>
              )}
              </Box>
            </Box>
        </Grid>
    </Grid>
   </Grid>
  )
}

export default function Works() {
  const classes = useStyles();

  return (
   <Box className={classes.mainDiv}>
    <Grid container>
     <Grid item xs={4}  md={12}> 
      <Box className={classes.TopContainer}  >
       <Box className={classes.shadowBox}>
        <Container className={classes.mainContainer} >
         <Grid container spacing={4} >
          {works.map((work) => (
            <Work key={work.name} work={work}/>
          ))}
          </Grid> 
         </Container>
        </Box>
       </Box>
      </Grid>
     </Grid>
    </Box>
  )
}

