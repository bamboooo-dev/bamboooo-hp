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
    </Container>
  );
}


  const GAMES =() =>{ 
    const classes = useStyles(); 

    return(
      <>
       <div>
         GAME
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
    return(
      <>
       <div>
         NEWS
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
  return(
    <>
     <div>
       Twitter
       <div>
         アカウントをフォローする!!
       </div>
     </div>
    </>
  )
}