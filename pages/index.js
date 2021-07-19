import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
    marginBottom:"40px",
  },
  mediaWaiwai:{
    width:"250px",
    marginBottom:"55px"
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <MainImage />
        <Box className={classes.mainContainer}>
          <GAMES />
          <Grid container >
            <News />
            <Grid item xs={1}></Grid>
            <Twitter />  
          </Grid>
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
        <Box paddingTop="40px" paddingBottom="75px" paddingRight="25px" marginBottom="75px" borderBottom="1px solid grey">
          <Grid container> 
            <Grid item xs={12}>
              <img src='/game.jpg' className={classes.mediaSection} />
            </Grid>
            <Grid item xs={4} align="center">
              <img src='/waiwai.png' alt='picture of waiwai' className={classes.mediaWaiwai} />
              <Typography variant="h5" gutterBottom>ワイワイ</Typography>
              <Typography >あなたの価値観でみんながワイワイ</Typography>
            </Grid>

            <Grid item xs={4} align="center">
              <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
              <Typography variant="h5" gutterBottom>memopic</Typography>
              <Typography >旅の思い出をプレイリストで振り返ろう</Typography>
            </Grid>

            <Grid item xs={4} align="center">
              <img src='/memorip.png' alt='picture of memorip' className={classes.mediaWorks} />
              <Typography variant="h5" gutterBottom>memorip</Typography>
              <Typography >旅行プラン作成・共有サイト</Typography>
            </Grid>

          </Grid>     
        </Box>
    )
  }
 
  const News =() =>{
    const classes = useStyles();

    return(
      <Grid item xs={7} container>
        <Grid item xs={12}>
          <img src='/news.jpg' className={classes.mediaSection} />
        </Grid>
        {/*本来はblogの埋め込みとか*/}
        <Grid item xs={6} align="center">
            <img src='/waiwai.png' alt='picture of waiwai' className={classes.mediaWaiwai} />
              <Typography variant="h5" gutterBottom>ワイワイ</Typography>
              <Typography >あなたの価値観でみんながワイワイ</Typography>
        </Grid>

        <Grid item xs={6} align="center">
          <img src='/memopic.png' alt='picture of memopic' className={classes.mediaWorks} />
            <Typography variant="h5" gutterBottom>memopic</Typography>
            <Typography >旅の思い出をプレイリストで振り返ろう</Typography>
        </Grid>

      </Grid>

      

    )
  }

const Twitter =() =>{
  const classes = useStyles();

  return(
    <Grid item xs={4} container>
      <Grid item xs={12}>
        <img src='/twitter.jpg' className={classes.mediaSection} />
      </Grid>
      <Box marginTop="48px" >
        
          <a class="twitter-timeline" 
            data-lang="ja" 
            data-width="350" 
            data-height="350" 
            data-chrome="nofooter noheader"
            href="https://twitter.com/bamboooo_inc?ref_src=twsrc%5Etfw">
              Tweets by bamboooo_inc
          </a> 
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        

        <Box>
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
    </Grid>
  )
}
