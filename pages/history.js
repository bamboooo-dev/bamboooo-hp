import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
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
  bambooSectionBody: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1D6E69', 
    borderRadius: '0 0 50% 50% / 0 0 calc(900% / 120) calc(900% / 120)',
    position: 'absolute',
    top: '15%',
    zIndex: 0,
  },
  bambooImage: {
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
  },
  {
    date: '2019年 12月',
    content: "旅行プラン共有サイト『Memorip』\nリリース",
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
              <Event key={event.content} event={event} zIndex={events.length - index}/>
            ))}
          </Box>
        </Box>
      </Box>
      <Container>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2020年 9月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CardActionArea component="a" href="https://www.memopic.net" target="_blank">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      memopic
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      旅行の思い出共有サイト『memopic』をリリース
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image='/memopic.png' />
                </Hidden>
              </Card>
            </CardActionArea>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2019年 12月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CardActionArea component="a" href="https://memorip.net" target="_blank">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      Memorip
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      旅行プラン共有サイト『Memorip』をリリース
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image='/memorip.png' />
                </Hidden>
              </Card>
            </CardActionArea>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
    </Box>
  )
}

const Event = (props) => {
  const { event, zIndex } = props;

  const classes = useStyles();
  
  return (
    <Grid container justify="center">
      <Grid item className={classes.bambooImage} xs={5}>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.bambooSection} style={{zIndex: zIndex}}>
          <div className={classes.bambooSectionTop} />
          <div className={classes.bambooSectionBody} />
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
