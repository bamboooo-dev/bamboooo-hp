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
    width: '90px',
    height: '300px',
    position: 'relative',
    marginTop: '-40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down(777)]: {
      width: '45px',
      height: '200px',
      marginTop: '-55px',
    },
  },
  bambooSectionTop: {
    width: '130%',
    height: '30%',
    backgroundColor: 'white', 
    borderRadius: '50%',
    position: 'relative',
    left: '-15%',
    zIndex: 1,
  },
  bambooSectionTopFirst: {
    width: '100%',
    height: '25%',
    backgroundColor: '#1D6E69', 
    borderRadius: '15% 85% 15% 85% / 15% 85% 15% 85% ',
    position: 'relative',
    border: '3px solid white',
    top: '20%',
    zIndex: 1,
  },
  bambooSectionTopFirstInner: {
    width: '86%',
    height: '86%',
    backgroundColor: '#64A5A0', 
    borderRadius: '15% 85% 15% 85% / 15% 85% 15% 85% ',
    position: 'absolute',
    top: '7%',
    left: '7%',
    zIndex: 2,
  },
  bambooSectionBody: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1D6E69', 
    borderRadius: '0 0 50% 50% / 0 0 calc(900% / 120) calc(900% / 120)',
    position: 'absolute',
    top: '15%',
    zIndex: 0,
    [theme.breakpoints.down(777)]: {
      top: 0,
    },
  },
  bambooSectionBodyFirst: {
    width: '100%',
    height: '88%',
    backgroundColor: '#1D6E69', 
    borderRadius: '0 100% 50% 50% / 0 20% calc(900% / 100) calc(900% / 100)',
    position: 'absolute',
    top: '27%',
    zIndex: 0,
    [theme.breakpoints.down(777)]: {
      height: '70%',
      top: '30%',
    },
  },
  bambooImageBox: {
    paddingTop: '80px',
    paddingRight: '50px',
    textAlign: 'right',
    [theme.breakpoints.down(777)]: {
      paddingRight: 0,
      paddingTop: 30,
    },
  },
  bambooImage: {
    border: '1px solid #c7c7c7',
    borderRadius: '7px',
    width: '250px',
    [theme.breakpoints.down(777)]: {
      width: '130px',
    },
  },
  bambooImageSP: {
    border: '1px solid #c7c7c7',
    borderRadius: '7px',
    objectFit: 'contain',
    width: '206px',
  },
  bambooText: {
    paddingTop: '100px',
    [theme.breakpoints.down(777)]: {
      paddingTop: 20,
      paddingLeft: 20,
      // borderBottom: '1px solid #c7c7c785',
    },
  },
  bambooDescription: {
    whiteSpace: 'pre-line',
    [theme.breakpoints.down(777)]: {
      fontSize: '0.75rem',
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
    [theme.breakpoints.down(777)]: {
      fontSize: '1rem',
      color: '#1D6E69',
      fontWeight: 600,
    },
  },
  description: {
    whiteSpace: 'pre-line',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      marginTop: 58,
      lineHeight: '25px',
    },
  },
}));

const events = [
  {
    date: '2021年 4月',
    content: "パーティゲーム『ワイワイ』\nリリース",
    img: '/waiwai_history.png',
  },
  {
    date: '2021年 1月',
    content: "パーティゲーム『ワイワイ』\n開発開始",
  },
  {
    date: '2021年 1月',
    content: "HP 作成",
  },
  {
    date: '2020年 11月',
    content: "仮想世界で出会うサイト\n『Alcatraz』開発開始",
  },
  {
    date: '2020年 9月',
    content: "アウトプットを展示する\n学生向けテックカンファレンス「技育展」に『memopic』で登壇",
  },
  {
    date: '2020年 9月',
    content: "旅行の思い出共有サイト『memopic』\nリリース",
    img: '/memopic_history.png',
  },
  {
    date: '2019年 12月',
    content: "旅行プラン共有サイト『Memorip』\nリリース",
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
          <Typography variant="h6" className={classes.description}>
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
                <>
                  <div className={classes.bambooSectionTop} />
                  <div className={classes.bambooSectionBody} />
                </>
              ) : (
                <>
                  <div className={classes.bambooSectionTopFirst}>
                    <div className={classes.bambooSectionTopFirstInner} />
                  </div>
                  <div className={classes.bambooSectionBodyFirst} />
                </>
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
            <>
              <div className={classes.bambooSectionTopFirst}>
                <div className={classes.bambooSectionTopFirstInner} />
              </div>
              <div className={classes.bambooSectionBodyFirst} />
            </>
          ) : (
            <>
              <div className={classes.bambooSectionTop} />
              <div className={classes.bambooSectionBody} />
            </>
          )}
        </div>
      </Grid>
      <Grid item xs={10} className={classes.bambooText}>
        <Typography variant="h4" gutterBottom className={classes.date}>
          {event.date}
        </Typography>
        <Typography variant="body1" className={classes.bambooDescription}>
          {event.content}
        </Typography>
      </Grid>
    </Grid>
  )
}

const EventPC = (props) => {

  const { event, zIndex, index } = props;

  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={5} className={classes.bambooImageBox}>
        {event.img && (
          <img src={event.img} className={classes.bambooImage} style={ event.img=="/waiwai.png" ? { border: 'none' } : {} } />
        )}
      </Grid>
      <Grid item xs={2}>
        <div className={classes.bambooSection} style={{zIndex: zIndex}}>
          {index ? (
            <>
              <div className={classes.bambooSectionTop} />
              <div className={classes.bambooSectionBody} />
            </>
          ) : (
            <>
              <div className={classes.bambooSectionTopFirst}>
                <div className={classes.bambooSectionTopFirstInner} />
              </div>
              <div className={classes.bambooSectionBodyFirst} />
            </>
          )}
        </div>
      </Grid>
      <Grid item xs={5} className={classes.bambooText}>
        <Typography variant="h4" gutterBottom className={classes.date}>
          {event.date}
        </Typography>
        <Typography variant="body1" className={classes.bambooDescription}>
          {event.content}
        </Typography>
      </Grid>
    </Grid>
  )
}
