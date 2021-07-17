import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderWidth: '0 30px 0 30px',
    borderColor: '#DFFFD7',
    borderStyle: 'solid',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  mainImage:{
    width:'100%',
    paddingLeft: '0',
    paddingRight: '0',
  },
  mediaWorks:{
    width:"350px"
  },
  mediagame:{
    width:"250px",
    marginTop: theme.spacing(6),
  },
  medianews:{
    width:"250px"
  },
  mediatwitter:{
    width:"250px"
  },
  gameFlex:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around",
    marginTop:"20px",
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <MainImage />
        <Box className={classes.mainContainer}>
          <GAMES />
          <NEWS />
          <Twitter />
        </Box>
    </>
  );
}

  const MainImage=() =>{
    const classes = useStyles();
    
    return(
      <img src='coloryourlife.png' className={classes.mainImage}/>
    )
  }

  const GAMES =() =>{ 
    const classes = useStyles(); 

    return(
      <>
       <Box >
         {/*GAME icon */}
          <img src='/game.jpg' className={classes.mediagame} />
            <Box className={classes.gameFlex}>
              <Box>
                <img src='/waiwai.png' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>ワイワイ</Typography>
                  <Typography >あなたの価値観でみんながワイワイ</Typography>
                </Box>
              </Box>
              
              <Box>
                <img src='/memopic.png' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>memopic</Typography>
                  <Typography >旅の思い出をプレイリストで振り返ろう</Typography>
                </Box>
              </Box>

              <Box>
                <img src='/memorip.png' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>memorip</Typography>
                  <Typography >旅行プラン作成・共有サイト</Typography>
                </Box>
              </Box>
              
            </Box>
        </Box>
      </>
    )
  }
 
  const NEWS =() =>{
    const classes = useStyles();

    return(
      <>
       <div>
         {/*NEWS icon*/}
         <img
          src='/news.jpg'
          className={classes.medianews}
          />
         <div>
          2019年　3月　bamboooo発足
         </div>
         <div>
          2019年　12月　Memorip
          　旅行プラン共有サイト『Memorip』をリリース
         </div>
       </div>
      </>
    )
  }

const Twitter =() =>{
  const classes = useStyles();

  return(
    <>
     <div>
       {/*Twitter icon*/}
       <img
          src='/twitter.jpg'
          className={classes.mediatwitter}
          />

       <div>
         アカウントをフォローする!!
       </div>
     </div>
    </>
  )
}
