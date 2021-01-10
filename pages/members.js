import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}))

function Member(props) {
  const { member } = props;
  const classes = useStyles();
  
  return (
    <Grid item xs={12} md={3}>
      {member.avatar ? (
        <Avatar alt={member.name} src={member.avatar} className={classes.large} />
      ):(
        <Avatar alt={member.name} src="/static/images/avatar/3.jpg" className={classes.large} />
      )}
      <Typography variant="h6">
        {member.position}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {member.university}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {member.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {member.description}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
      >
        <Box mr={0.5}>
          <a href={member.twitter} target="_blank">
            <TwitterIcon style={{ color: blue[300] }}/>
          </a>
        </Box>
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
      </Box>
    </Grid>
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
    university: '京都大学',
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
]

export default function Members() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Box>
        <Typography variant="h4" gutterBottom>
          MEMBERS
        </Typography>
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
  );
}
