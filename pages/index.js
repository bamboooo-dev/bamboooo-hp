import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MainPaper from '../src/MainPaper';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(3),
  },
  mediaWaiWai:{
    width:"200px"
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <MainPaper />
         <GAMES />
         <NEWS />
         <Twitter />
         <Members />
         <OBOG/>
    </Container>
  );
}
 

  const GAMES =() =>{ 
    const classes = useStyles(); 

    return(
      <>
       <div>
         {/*GAME icon */}
          <img
          src='/game.jpg'
          className={classes.medgame}
          />
         <div>
           ワイワイ
             <img
             src='/waiwai.png'
             className={classes.mediaWaiWai}
             />
         </div>
         <div>
          Memorip
         </div>
       </div>
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
          className={classes.mednews}
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
          className={classes.medtwitter}
          />

       <div>
         アカウントをフォローする!!
       </div>
     </div>
    </>
  )
}

const Members =() =>{
  const classes = useStyles();

  return(
    <>
     <div>
       {/*Members icon*/}
       <img
          src='/member.jpg'
          className={classes.medmember}
          />

       <div>
         {/*Memberのiconと紹介文 */}
         Memberの紹介文
       </div>
     </div>
    </>
  )
}

const OBOG =() =>{
  const classes = useStyles();

  return(
    <>
     <div>
       {/*OBOG icon*/}
       <img
          src='/OBOG.jpg'
          className={classes.OBOG}
          />

       <div>
         {/*OBOGのiconと紹介文 */}
         OB・OGの紹介文
       </div>
     </div>
    </>
  )
}