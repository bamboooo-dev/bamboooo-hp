import { ListItemText, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  mainImage:{
    width:'100%',
    paddingLeft: '0',
    paddingRight: '0',
  },
  memberAvater: {
    width: '160px',
    height: '160px',
    float: 'left',
  },
  memberContainer: {
    width:'100%',
  },
  mediamember:{
    width:"250px"
  },
  mediaOBOG:{
    width:"250px"
  },
  memberList:{
    display:'flex',
    flexFlow:'column',
    justifyContent:'sapce-around',
    alignItems:'center',
    height:'160px',
  }
}))

function Member(props) {
  const { member } = props;
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const handleClickOpen = () => {setopen(true);};
  const handleClose = () => {setopen(false);};
  
  return (
    <>
    <Container className={classes.memberContainer}>
       <img src='/member.jpg' className={classes.mediamember} />
       <Grid container>
        {/*ここにメンバーをmapで全て入れ込みたい*/}
        <Grid item xs={4} container >
          <Grid item xs={5}>
            <Avatar alt={member.name} src={member.avatar} className={classes.memberAvater} />
          </Grid>
          <Grid item xs={7}>
            <Box className={classes.memberList}>
              <Typography variant="h6" >
                {member.position}
              </Typography>
              <Typography variant="h5" >
                {member.name}
              </Typography>
              <Button variant='outlined' size='small'
                onClick={() => {handleClickOpen}}>
                more 
              </Button>
            </Box>
          </Grid>

        </Grid>

      
    

      </Grid>
    </Container>

    <Dialog open={open} onClose={handleClose}>
      <Grid container>
        <Grid item xs={5}>
            <Avatar alt={member.name} src={member.avatar} className={classes.memberAvater} />
        </Grid>
        <Grid item xs={7}>
          <Box className={classes.memberList}>
            <Typography variant="h6" >
              {member.position}
            </Typography>
            <Typography variant="h5" >
              {member.name}
            </Typography>

            <Box display="flex" alignItems="center">
              {member.twitter && (
              <Box mr={0.5}>
                <a href={member.twitter} target="_blank">
                  <TwitterIcon style={{ color: blue[300] }}/>
                </a>
              </Box>
              )}
              {member.github && (
                <Box mx={0.5}>
                  <a href={member.github} target="_blank">
                    <GitHubIcon style={{ color: "black", }}/>
                  </a>
                </Box>
              )}
              {member.homepage && (
                <Box mx={0.5}>
                  <a href={member.homepage} target="_blank">
                    <HomeIcon style={{ color: "black", }}/>
                  </a>
                </Box>
              )}
              {member.wantedly && (
                <Box>
                  <a href={member.wantedly} target="_blank">
                    <img
                      src="/wantedly_mark.png"
                      width={30}
                    />
                  </a>
                </Box>
              )}
              {member.instagram && (
                <Box>
                  <a href={member.instagram} target="_blank">
                    <InstagramIcon style={{ color: "black", }}/>
                  </a>
                </Box>
              )}
            </Box>

          </Box>
        </Grid>
        <Box>
          <Typography>意気込みを一言</Typography>
          <Typography>{member.ikigomi}</Typography>
          <Typography>メンバーから一言-------</Typography>
          <Typography>{member.hitokoto}</Typography>
        </Box>
      </Grid>
    </Dialog>
    </>

  ) 
}

{/*後に画像は差し替えてサイズ調整*/}
const MainImage=() =>{
  const classes = useStyles();
  
  return(
    <img src='/home_top.png' className={classes.mainImage}/>
  )
}



const members = [
  { 
    position: 'Infrastructure Engineer',
    university: '北海道大学',
    name: '山本 浩平',
    description: 'k8s。猫好き。初めての料理は炒り卵。',
    avatar: '/avatar_kohei.jpg',
    twitter: 'https://twitter.com/yamagai_0919',
    github: 'https://github.com/yamagai',
    homepage: 'http://portfolio-kohei.herokuapp.com/',
    wantedly: 'https://www.wantedly.com/id/yamamoto_kohei_b',
  },
  { 
    position: 'Backend Engineer',
    university: '京都造形大学',
    name: '住江 祐哉',
    description: 'パフォーマンス・チューナー。満島ひかりが好き。',
    avatar: '/avatar_yuya.jpg',
    twitter: 'https://twitter.com/monaka_0721',
    github: 'https://github.com/MONAKA0721',
    homepage: 'https://monaka0721.github.io/portfolio/#/',
    wantedly: 'https://www.wantedly.com/id/monaka0721',
  },
  { 
    position: 'Planner & Unity Engineer',
    university: '京都大学',
    avatar: '/avatar_shunpei.jpg',
    name: '朝田 隼平',
    description: 'ムードメーカー。趣味はカフェ巡り。',
    twitter: 'https://twitter.com/0514AsaShun',
  },
  { 
    position: 'Planner',
    university: '早稲田大学',
    avatar: '/avatar_kento.png',
    name: '中林 健人',
    description: '京都大学中退。現在早稲田大学在学兼ノマドカフェNOPAY代表。',
    twitter: 'https://twitter.com/bayashi0314',
  },
  { 
    position: 'Designer',
    name: '松田 まり',
    avatar: '/avatar_mari.png',
    description: 'スーパーデザイナー。左利きの風呂嫌い。',
  },
];

const obogs = [
  {
    position: 'Frontend Engineer',
    university: '長崎大学',
    avatar: '/avatar_takaki.png',
    name: '竹内 貴紀',
    description: '一日15時間寝たことがある。',
    twitter: 'https://twitter.com/shrry2',
    github: 'https://github.com/shrry2',
    homepage: 'https://takaki.takeu.ch',
    wantedly: 'https://www.wantedly.com/id/takaki_takeuchi',
  },
  { 
    position: 'Designer',
    university: '関西学院大学',
    avatar: '/avatar_chisa.png',
    name: '近藤 千紗',
    description: 'イーブイ飼いたい。',
    twitter: 'https://twitter.com/5xPsr',
    github: 'https://github.com/chisakondo',
  },
  { 
    position: 'Frontend Engineer',
    university: '同志社大学',
    avatar: '/avatar_kazuki.jpeg',
    name: '小森 一輝',
    description: 'Vue信者。尻に火が付くまで動かない。リンゴと窓のPCを持っている。',
    twitter: 'https://twitter.com/D_kazuyan',
    github: 'https://github.com/kazuki-komori',
    wantedly: 'https://www.wantedly.com/id/D_kazuyan',
  },
  { 
    position: 'Inspirator',
    university: '大阪府立大学',
    name: '三輪 雄基',
    description: 'アウトドアマン。スシローヘビーユーザー。',
    avatar: '/avatar_yuki.jpg',
    twitter: 'https://twitter.com/wamiwa1126',
    instagram: 'https://www.instagram.com/wamiwa1126/',
  },
]

export default function Members() {
  const classes = useStyles();

  return (
    <>
    <MainImage />
    <Container className={classes.mainContainer}>
      <Box>
        
       
        
        <Grid container spacing={4}>
          {members.map((member) => (
            <Member key={member.name} member={member} /> 
          ))}
        </Grid>
      </Box>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          OB・OG
        </Typography>
        <Grid container spacing={4}>
          {obogs.map((obog) => (
            <Member key={obog.name} member={obog} /> 
          ))}
        </Grid>
      </Box>
    </Container>
    </>
  );
}
