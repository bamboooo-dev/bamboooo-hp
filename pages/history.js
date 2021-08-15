import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  headline: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    borderLeft: '5px solid #19807B',
    paddingLeft: 20,
  },
  innerBox: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  coverBox: {
    backgroundImage: 'url(/history_cover.png)',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  whiteBox: {
    backgroundColor: 'white',
  },
  bambooSection: {
    width: '90px',
    height: '350px',
    position: 'relative',
    marginTop: '-48px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  },
  bambooSectionBodyFirst: {
    width: '100%',
    height: '88%',
    backgroundColor: '#1D6E69', 
    borderRadius: '0 100% 50% 50% / 0 20% calc(900% / 100) calc(900% / 100)',
    position: 'absolute',
    top: '27%',
    zIndex: 0,
  },
  bambooImageBox: {
    paddingTop: '100px',
  },
  bambooImage: {
    border: '1px solid #c7c7c7',
    borderRadius: '7px',
  },
  bambooText: {
    paddingTop: '140px',
  },
  bambooDescription: {
    whiteSpace: 'pre-line',
  },
}));

const events = [
  {
    date: '2021年 4月',
    content: "パーティゲーム『ワイワイ』\nリリース",
    img: '/waiwai.png',
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
    content: "サポーターズ主催、アウトプットを展示する\n学生向けテックカンファレンス「技育展」に\n『memopic』で登壇",
  },
  {
    date: '2020年 9月',
    content: "旅行の思い出共有サイト『memopic』\nリリース",
    img: '/memopic.png',
  },
  {
    date: '2019年 12月',
    content: "旅行プラン共有サイト『Memorip』\nリリース",
    img: '/memorip.png',
  },
  {
    date: '2019年 3月',
    content: "山本と住江で\n「bamboo」としてスタート",
  },
]

export default function History() {
  const classes = useStyles();
  
  return (
    <Box className={classes.coverBox}>
      <Box pt="25vw" className={classes.innerBox}>
        <Box p={10} className={classes.whiteBox}>
          <Typography variant="h2" className={classes.headline} gutterBottom>
            見出しのテキスト
          </Typography>
          <Typography variant="h6">
            あああああああああああああああああああああああああああああああああ
          </Typography>
          <Box mt={20}>
            {events.map((event, index) => (
              <Event key={event.content} event={event} zIndex={events.length - index} index={index}/>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Event = (props) => {
  const { event, zIndex, index } = props;

  const classes = useStyles();
  
  return (
    <Grid container justify="center">
      <Grid item xs={5} className={classes.bambooImageBox}>
        {event.img && (
          <img src={event.img} width="300px" className={classes.bambooImage} style={ event.img=="/waiwai.png" ? { border: 'none' } : {} } />
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
        <Typography variant="h4" gutterBottom>
          {event.date}
        </Typography>
        <Typography variant="body1" className={classes.bambooDescription}>
          {event.content}
        </Typography>
      </Grid>
    </Grid>
  )
}
