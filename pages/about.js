import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  contents: {
    borderStyle: "solid",
    borderWidth: "0 15px 0 15px",
    padding: 20,
    [theme.breakpoints.up('lg')]: {
      borderWidth: "0 30px 0 30px",
      padding: 40,
    },
    borderColor: "#DFFFD6",
  },
  innerContents: {
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      width: '65%',
    }
  },
  coverMain: {
    marginTop: 20,
    marginBottom: 20,
    minWidth: 300,
  },
  block: {
    [theme.breakpoints.up('lg')]: {
      paddingBottom: 50,
    },
  },
  divider: {
    height: 4,
    backgroundColor: theme.palette.tertiary.main,
  },
  headline: {
    fontFamily: "Corporate-Logo-Bold-ver2",
    whiteSpace: "pre-line",
  },
  detail: {
    fontFamily: ['"YuGothic"', 'sans-serif'],
    fontWeight: 500,
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    whiteSpace: "pre-line",
  },
  catchphraseContainer: {
    marginBottom: 20,
  },
  speakerDeckEmbed: {
    width:'80%',
    margin: 'auto',
  }
}));

export default function About() {
  const classes = useStyles();
  
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "//speakerdeck.com/assets/embed.js";
  
    document.body.appendChild(script);
  
    return () => {
    }
  }, []);

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container justify="center">
        <img src='/about_cover_top.png' width="100%" />
        <img src='/about_cover_main.png' width="50%" className={classes.coverMain}/>
        <img src='/about_cover_bottom.png' width="100%" />
      </Grid>
      <Grid className={classes.contents}>
        <Grid container className={classes.innerContents}>
          <Grid container className={classes.block}>
            <Grid item xs={12}>
              <img src='/vision.png' width="30%" style={{maxWidth: 269}}/>
            </Grid>
            {/* alignItems が違うので <Topic/> を使用していない */}
            <Grid container item xs={12} style={{ marginBottom: 40 }} alignItems="center">
              <Grid container justify="center" item xs={4}>
                <img src='/vision_1.png' width="70%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h2" gutterBottom className={classes.headline} style={{color: "#00AFE6"}}>
                  ユーザーから愛されること
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid container className={classes.block}>
            <Grid item xs={12}>
              <img src='/mission.png' width="35%" style={{maxWidth: 300}} />
            </Grid>
            {missions.map((mission) => (
              <Topic key={mission.headline} topic={mission} color="#F451A5"/>
            ))}
          </Grid>
          
          <Grid container className={classes.block}>
            <Grid item xs={12}>
              <img src='/philosophy.png' width="42%" style={{maxWidth: 400}}/>
            </Grid>
            {philosophies.map((philosophy) => (
              <Topic key={philosophy.headline} topic={philosophy} color="#EAB02A"/>
            ))}
          </Grid>

        </Grid>
        <div className={classes.speakerDeckEmbed}>
          <div async className="speakerdeck-embed" data-slide="4" data-id="ab88cdaba19348a7a1333f27d68272cd" data-ratio="1.77777777777778" />
        </div>
      </Grid>
    </Container>
  );
}

function Topic(props) {
  const { topic } = props;
  const classes = useStyles();
  
  return (
    <Grid container item xs={12} className={classes.catchphraseContainer} alignItems="flex-start">
      <Grid container justify="center" item xs={4}>
        <img src={topic.image} width="70%" style={{objectFit: "contain", maxWidth: 300 }}/>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h2" gutterBottom className={classes.headline} style={{color: props.color}}>
          { topic.headline }
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.detail}>
          { topic.detail }
        </Typography>
      </Grid>
    </Grid>
  )
}

const missions = [
  {
    image: '/mission_1.png',
    headline: '人々を笑顔に',
    detail: `エンターテインメントとは、「人生を色付け、より豊かにするもの」だと考えています。
            人々に生きる楽しみや一歩踏み出すきっかけを与えるサービスを作ることが我々の使命です。`,
  },
  {
    image: '/mission_2.png',
    headline: '社会の非効率を',
    detail: `効率化には様々な手段があります。
            その中でも我々はコミュニケーションを円滑にし、チームのモチベーションをあげることで社会の効率化を目指します。`,
  },
]

const philosophies = [
  {
    image: '/philosophy_1.png',
    headline: '新しいエンタメを届ける',
    detail: '既存のものに囚われず、ユーザーにとって新鮮で、生活を面白くする『新しいエンタメを』つくり続けます。',
  },
  {
    image: '/philosophy_2.png',
    headline: 'やりたいことをやりたいだけ',
    detail: '各々がしたいことを尊重し、『やりたいことをやりたいだけ』任せることで最高のサービスをつくり上げます。',
  },
  {
    image: '/philosophy_3.png',
    headline: 'ユーザーとともに',
    detail: 'ユーザーの意見を積極的に取り入れ、サービスを『ユーザーとともに』つくっていきます。',
  },
]
