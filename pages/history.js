import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
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
}));

export default function History() {
  const classes = useStyles();
  
  return (
    <Container>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2020年 1月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                HIMO
              </Typography>
              <Typography>
                パーティーゲーム『HIMO』の開発開始
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2020年 1月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                HP 作成
              </Typography>
              <Typography>
                bamboooo のホームページを作成する
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2020年 11月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Alcatraz
              </Typography>
              <Typography>
                仮想世界で出会うサイト『Alcatraz』開発開始
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
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
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                技育展 登壇
              </Typography>
              <Typography>
                サポーターズ主催、アウトプットを展示する学生向けテックカンファレンス「技育展」に memopic で登壇
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
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
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2019年 3月
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                bamboooo 発足
              </Typography>
              <Typography>
                山本と住江で「bamboo」としてスタート
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  )
}
