import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import grey from "@material-ui/core/colors/grey";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  media: {
    borderWidth: 1,
    border: "solid",
    borderRadius: 10,
    borderColor: grey[300],
  },
  mainContainer: {
    marginTop: theme.spacing(3),
  },
  description: {
    whiteSpace: "pre-line",
    lineHeight: 2,
  }
}));

const works = [
  { 
    name: 'memopic',
    catchphrase: '旅の思い出をプレイリストで振り返ろう',
    url: 'https://www.memopic.net',
    alt: 'Picture of memopic',
    image: '/memopic.png',
    description: `
      旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです`,
    appleUrl: "https://apps.apple.com/us/app/memopic/id1527852844",
    googleUrl: "https://play.google.com/store/apps/details?id=com.memopic",
  },
  { 
    name: 'Memorip',
    catchphrase: '旅行プラン作成・共有サイト',
    url: 'https://memorip.net',
    alt: 'Picture of Memorip',
    image: '/memorip.png',
    description: `
      『Memorip』では直感的にプランを作成したり
      簡単にプランを共有したりすることができます
      これからの旅行のしおりとして、また
      他の人のプランを参考にして作成できます
    `,
  },
  { 
    name: 'Alcatraz',
    catchphrase: '仮想世界で出会おう',
    alt: 'Picture of Alcatraz',
  },
  { 
    name: 'HIMO',
    alt: 'Picture of HIMO',
  },
];

function Work(props) {
  const classes = useStyles();
  const { work } = props; 

  return (
    <Grid item container xs={12} md={6} justify="center">
      <Grid item>
        {work.image ? (
          <img
            src={work.image}
            alt={work.alt}
            width={400}
            height={260}
            className={classes.media}
          />
        ):(
          <Box
            width={400}
            height={260}
            className={classes.media}
            mb={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4">
              COMING SOON...
            </Typography> 
          </Box>
        )}
        <Typography gutterBottom variant="h4" component="h2">
          {work.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {work.catchphrase}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" gutterBottom className={classes.description}>
          {work.description}
        </Typography>
        {work.url && (
          <Box my={1}>
            <Button variant="outlined" href={work.url} target="_blank">公式サイトへ</Button>
          </Box>
        )}
        {(work.appleUrl && work.googleUrl) &&(
          <Box 
            display="flex"
            alignItems="center"
          >
            {work.appleUrl && (
              <Box>
                <a href={work.appleUrl} target="_blank">
                  <img
                    src="/app-store-badge.png"
                    alt="App Store Badge"
                  />
                </a>
              </Box>
            )}
            {work.googleUrl && (
              <Box>
                <a href={work.appleUrl} target="_blank">
                  <img
                    src="/google-play-badge.png"
                    alt="Google Play Store Badge"
                    height={60}
                  />
                </a>
              </Box>
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default function Works() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Grid container spacing={4}>
        {works.map((work) => (
          <Work key={work.name} work={work}/>
        ))}
      </Grid>
    </Container>
  )
}
