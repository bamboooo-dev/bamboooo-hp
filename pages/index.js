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
  mediaSection:{
    width:"250px",
    marginTop: theme.spacing(6),
  },
  mediatwitter:{
    width:"250px"
  },
  gameFlex:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around",
    marginTop:"20px",
  },
  underFlex:{
    display:"flex",
    flexWrap:"wrap",
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <MainImage />
        <Box className={classes.mainContainer}>
          <GAMES />
          <Box className={classes.underFlex}>
            <NEWS />
            <Twitter />
          </Box>
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
       <Box marginBottom='40px'>
          <img src='/game.jpg' className={classes.mediaSection} />
            <Box className={classes.gameFlex}>
              <Box>
                <img src='/waiwai.png' alt='picture of waiwai' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>ワイワイ</Typography>
                  <Typography >あなたの価値観でみんながワイワイ</Typography>
                </Box>
              </Box>
              
              <Box>
                <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>memopic</Typography>
                  <Typography >旅の思い出をプレイリストで振り返ろう</Typography>
                </Box>
              </Box>

              <Box>
                <img src='/memorip.png' alt='picture of memorip' className={classes.mediaWorks} />
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
       <Box marginBottom='40px'>
          <img src='/news.jpg' className={classes.mediaSection} />
         
          {/*本来はblog埋め込みなりをするけど一旦worksで代用 */}
          <Box className={classes.gameFlex}>
              <Box>
                <img src='/waiwai.png' alt='picture of waiwai' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>ワイワイ</Typography>
                  <Typography >あなたの価値観でみんながワイワイ</Typography>
                </Box>
              </Box>
              
              <Box>
                <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
                <Box textAlign='center'>
                  <Typography variant="h5" gutterBottom>memopic</Typography>
                  <Typography >旅の思い出をプレイリストで振り返ろう</Typography>
                </Box>
              </Box>

          </Box>
          {/*ここまで*/}
        </Box>
      </>
    )
  }

const Twitter =() =>{
  const classes = useStyles();

  return(
    <>
     <Box marginBottom='40px'>
          <img src='/twitter.jpg' className={classes.mediaSection} />
          <Box >
            <a class="twitter-timeline" 
              data-lang="ja" 
              data-width="350" 
              data-height="350" 
              data-chrome="noheader nofooter"
              href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw">
                Tweets by bamboooo_inc
            </a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <a href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw" 
              class="twitter-follow-button" 
              data-width="large" 
              data-show-screen-name="false" 
              data-lang="ja" 
              data-show-count="false">
                Follow @bamboooo_inc
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Box>
     </Box>
    </>
  )
}
