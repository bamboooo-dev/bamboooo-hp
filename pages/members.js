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
import ClearIcon from '@material-ui/icons/Clear';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  mainDiv:{
    zIndex:'1',
    backgroundImage: "url(/member_top.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  mainContainer: {
    maxWidth:'1000px',
    margin:"0 auto",
    paddingTop:"25vw",
    [theme.breakpoints.down('777')]: {
      paddingTop:100,
    },
  },
  memberContainer: {
    backgroundColor:'white',
    [theme.breakpoints.down('777')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  memberAvatarBreakpoint:{
    [theme.breakpoints.down('777')]: {
      display:'flex',
      flexFlow:'column',
      alignItems:'center',
      justifyContent:'center',
     },
  },
  memberAvater: {
    width:"auto",
    height:"auto",
    float: 'left',
    marginLeft:"7px",
  },
  memberList:{
    display:'flex',
    flexFlow:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'160px',
  },
  dialogAvater: {
    width:"100px",
    height:"100px",
    marginLeft:"10px",
  },
  dialogMemberList:{
    display:'flex',
    flexFlow:'column',
    alignItems:'center',
    justifyContent:'center',
    height:"100px",
    marginRight:"10px",
  },
  closeButton:{
    position:'absolute',
    top:'0',
    right:'0',
    borderRadius:'0',
    backgroundColor:"#00837D",
    '&:hover': {
      opacity: "0.8",
      backgroundColor:"#19807B",
    },
  },
  skillContainer: {
    backgroundColor: "#F7FCF3",
  },
}))

function Member(props) {
  const { member, index, handleClickOpen } = props;
  const classes = useStyles();
  
  return (
    <>
        {/*ここにメンバーをmapで全て入れ込みたい*/}
      <Grid item sm={4} container>
        <Grid item sm={5} xs={4} className={classes.memberAvatarBreakpoint}>
          <Avatar alt={member.name} src={member.avatar} className={classes.memberAvater} />
        </Grid>
        <Grid item sm={7} xs={8}>
          <Box className={classes.memberList}>
            <Typography variant="body1" noWrap gutterBottom>
              {member.position}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {member.name}
            </Typography>
            <Button variant='outlined' size='small'
              onClick={() => {handleClickOpen(index)}}>
              more 
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
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
    position: 'Planner',
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

{/*
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
*/}

export default function Members() {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [openMember, setOpenMember] = useState({});
  
  const handleClickOpen = (index) => {
    setOpen(true);
    setOpenMember(members[index])
  };

  const handleClose = () => {setOpen(false);};

  return (
    <Box className={classes.mainDiv}>
      <Box className={classes.mainContainer}>
        <Box className={classes.memberContainer}>
          <Box pt="50px" pb="30px" ml="10px">
            <Typography variant="h3" >
              <span style={{color:"#00837D", fontWeight:"900"}}>|</span>  Member
            </Typography>
          </Box>

          <Grid container spacing={4}>    
            {members.map((member, index) => (
              <Member key={member.name} member={member} index={index} handleClickOpen={handleClickOpen}/> 
            ))}
          </Grid>

          {/*以下ダイアログ部分*/}
          <Dialog open={open} onClose={handleClose} >
            <div style={{width: '350px'}}>
              <Box mt="40px">
              <Grid container >
                <Grid item xs={3} sm={4}>
                    <Avatar alt={openMember.name} src={openMember.avatar} className={classes.dialogAvater} />
                </Grid>
                <Grid item xs={9} sm={8}>
                  <Box className={classes.dialogMemberList}>
                    <Typography variant="body1" >
                      {openMember.position}
                    </Typography>
                    <Typography variant="h6" >
                      {openMember.name}
                    </Typography>

                    <Box display="flex" alignItems="center">
                      {openMember.twitter && (
                      <Box mr={0.5}>
                        <a href={openMember.twitter} target="_blank">
                          <TwitterIcon style={{ color: blue[300] }}/>
                        </a>
                      </Box>
                      )}
                      {openMember.github && (
                        <Box mx={0.5}>
                          <a href={openMember.github} target="_blank">
                            <GitHubIcon style={{ color: "black", }}/>
                          </a>
                        </Box>
                      )}
                      {openMember.homepage && (
                        <Box mx={0.5}>
                          <a href={openMember.homepage} target="_blank">
                            <HomeIcon style={{ color: "black", }}/>
                          </a>
                        </Box>
                      )}
                      {openMember.wantedly && (
                        <Box>
                          <a href={openMember.wantedly} target="_blank">
                            <img
                              src="/wantedly_mark.png"
                              width={30}
                            />
                          </a>
                        </Box>
                      )}
                      {openMember.instagram && (
                        <Box>
                          <a href={openMember.instagram} target="_blank">
                            <InstagramIcon style={{ color: "black", }}/>
                          </a>
                        </Box>
                      )}
                    </Box>

                  </Box>
                </Grid>
                  <Box mt="20px" mb="30px" pl="20px" pr="20px">
                    <Typography style={{color:"#26B8E5", fontSize:"25px"}} >意気込みをひとこと</Typography>
                    <Typography variant="body1">{openMember.ikigomi}</Typography>
                    <Typography>メンバーから一言</Typography>
                    <Typography>{openMember.hitokoto}</Typography>
                  </Box>
              </Grid>
              </Box>
              
              <Button 
                className={classes.closeButton}
                onClick={handleClose}>
                <ClearIcon style={{color:"white"}} />
              </Button>
            </div>
          </Dialog>
        </Box>

      {/*ここからskill部分*/}
        <Box className={classes.skillContainer}>
          <Box pt="50px" pb="30px" ml="10px">
            <Typography variant="h3" >
              <span style={{color:"#00837D", fontWeight:"900"}}>|</span>  Skill
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
