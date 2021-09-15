import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  headline: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    borderLeft: '5px solid #76B3AF',
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      border: 'none',
      paddingLeft: 15,
    },
  },
  headlineBox: {
    [theme.breakpoints.down('sm')]: {
      borderLeft: '3px solid #76B3AF',
      height: 28,
      boxSizing: 'border-box',
    },
  },
  innerBox: {
    maxWidth: '1000px',
    margin: '0 auto',
    paddingTop: '25vw',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '35vw',
    }, 
  },
  coverBox: {
    backgroundImage: 'url(/history_cover.png)',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url(/history_cover_sp.png)',
    },
  },
  whiteBox: {
    backgroundColor: 'white',
    backgroundImage: 'url(/history_background.png)',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, .1)',
    marginBottom: 30,
    [theme.breakpoints.down(777)]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 40,
      maxWidth: '90%',
    },
  },
  bambooSection: {
    marginTop: '-15px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
    },
  },
  bambooImageBox: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
  },
  bambooImage: {
    border: '1px solid #c7c7c7',
    borderRadius: '7px',
    width: '350px',
  },
  bambooImageSP: {
    border: '1px solid #c7c7c7',
    borderRadius: '7px',
    objectFit: 'contain',
    width: '200px',
  },
  bambooText: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down(777)]: {
      paddingLeft: 20,
    },
  },
  bambooDescription: {
    whiteSpace: 'pre-line',
    marginTop: 20,
    [theme.breakpoints.down(777)]: {
      whiteSpace: 'normal',
      lineHeight: '1.5rem',
    },
  },
  eventsBox: {
    [theme.breakpoints.down(777)]: {
      marginTop: 80,
    },
  },
  date: {
    color: '#1D6E69',
    fontSize: 25,
    fontWeight: 600,
    [theme.breakpoints.down(777)]: {
      fontSize: '1rem',
    },
  },
  description: {
    whiteSpace: 'pre-line',
    [theme.breakpoints.down('sm')]: {
      marginTop: 58,
      lineHeight: '25px',
    },
  },
}));

const events = [
  {
    date: '2021年 4月',
    content: "オンラインコミュニケーションゲームアプリ『ワイワイ』リリース\nYouTuber に取り上げてもらう",
    img: '/waiwai_history.png',
  },
  {
    date: '2021年 1月',
    content: "初のゲームアプリ『ワイワイ』開発開始",
  },
  {
    date: '2021年 1月',
    content: "チームメンバーが増えたことや、作品をまとめる場所があればということで HP を作成",
  },
  {
    date: '2020年 11月',
    content: "仮想世界で出会うサイト『Alcatraz』開発開始・中止",
  },
  {
    date: '2020年 9月',
    content: "アウトプットを展示する学生向けテックカンファレンス「技育展」に『memopic』で登壇",
  },
  {
    date: '2020年 9月',
    content: "旅行の思い出共有サイト『memopic』リリース、App Store や Google Play Store でも公開",
    img: '/memopic_history.png',
  },
  {
    date: '2019年 12月',
    content: "bamboooo として初めての Web サービス、旅行プラン共有サイト『Memorip』リリース",
    img: '/memorip_history.png',
  },
  {
    date: '2019年 3月',
    content: "山本と住江で「bamboo」としてスタート、後にメンバーが4人になり「bamboooo」となる",
  },
]

export default function History() {
  const classes = useStyles();
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box className={classes.coverBox}>
      <Box className={classes.innerBox} display="flex" justifyContent="center">
        <Box p={10} className={classes.whiteBox}>
          <Box className={classes.headlineBox}>
            <Typography variant="h3" className={classes.headline} gutterBottom>
              bamboooo のこれまでとこれから
            </Typography>
          </Box>
          <Typography className={classes.description}>
          {`「みんなを笑顔にする」。
小さい頃から抱いていた長年の夢を実現させたい、その想いで2019年2人の学生によって bamboooo の活動は始まりました。
bamboooo という名前には「"伸び代しかない"エンタメクリエイターチームを目指す」という願いが込められています。
これまでもこれからも、変わらぬ想いで人々を笑顔にできるエンタメを作り続けていきます。`}
          </Typography>
          <Box mt={20} className={classes.eventsBox}>
            {events.map((event, index) => (
              isSP ? <EventSP key={event.content} event={event} zIndex={2*events.length - 2*index} index={index} />
              : <EventPC key={event.content} event={event} zIndex={events.length - index} index={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const EventSP = (props) => {

  const { event, zIndex, index } = props;

  const classes = useStyles();
  
  return (
    <Grid container>
      {event.img && (
        <>
          <Grid item xs={2}>
            <div className={classes.bambooSection} style={{zIndex: zIndex+1}}>
              {index !== 0 ? (
                <img src="/bamboo_section.png" width={45} />
              ) : (
                <img src="/bamboo_section_first.png" width={45} />
              )}
            </div>
          </Grid>
          <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={event.img} className={classes.bambooImageSP} style={ event.img=="/waiwai_history.png" ? { border: 'none' } : {} } />
          </Grid> 
        </>
      )}
      <Grid item xs={2}>
        <div className={classes.bambooSection} style={{zIndex: zIndex}}>
          {!event.img && index === 0 ? (
            <img src="/bamboo_section_first.png" width={45} />
          ) : (
            <img src="/bamboo_section.png" width={45} />
          )}
        </div>
      </Grid>
      <Grid item xs={10} className={classes.bambooText} style={ event.img ? { alignItems: 'flex-start' } : {} }>
        <Box style={{width: '100%'}}>
          <Typography variant="h4" gutterBottom className={classes.date}>
            {event.date}
          </Typography>
          <Typography className={classes.bambooDescription}>
            {event.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

const EventPC = (props) => {

  const { event, zIndex, index } = props;

  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={4}>
        <div className={classes.bambooSection} style={{zIndex: zIndex, display: 'flex', justifyContent: 'flex-end'}}>
          {index !== 0 ? (
            <img src="/bamboo_section.png" width={100} />
          ) : (
            <img src="/bamboo_section_first.png" width={100} />
          )}
        </div>
      </Grid>
      <Grid item xs={8} className={classes.bambooImageBox}>
        {event.img && (
          <img src={event.img} className={classes.bambooImage} style={ event.img=="/waiwai.png" ? { border: 'none', marginBottom: 20} : {marginBottom: 20} } />
        )}
        <Box style={{width: '100%'}}>
          <Typography variant="h4" gutterBottom className={classes.date}>
            {event.date}
          </Typography>
          <Typography className={classes.bambooDescription}>
            {event.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
