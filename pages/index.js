import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


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
  mediaApplication:{
    width:"370px",
    marginBottom:"40px",
  },
  mediaWaiwai:{
    width:"250px",
    marginBottom:"55px"
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
      <ReturnTopButton />
    </>
  );
}

  const MainImage=() =>{
    const classes = useStyles();
    
    return(
      <img src='/home_top.png' className={classes.mainImage}/>
    )
  }

  const GAMES =() =>{ 
    const classes = useStyles(); 

    return(
        <Box paddingTop="40px" paddingBottom="75px" paddingRight="25px" marginBottom="75px" borderBottom="1px solid grey">
          <Grid container> 
            <Grid item xs={12}>
              <img src='/application.png' className={classes.mediaApplication} />
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

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return(
      <Grid item xs={7} container>
        <Grid item xs={12}>
          <img src='/news.jpg' className={classes.mediaSection} />
        </Grid>       
        {/*本来はblogの埋め込みとか*/}
        <Grid item xs={12}>
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
      <Box marginTop="48px" align="center">
        
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
      <img src="TOP.jpg" width="50px" / >
    </Button>
    )


}
