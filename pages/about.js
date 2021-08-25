import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  detail: {
    fontFamily: ['"Helvetica Neue"', '"Helvetica"', '"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', '"Arial"', '"Yu Gothic"', '"Meiryo"', 'sans-serif'],
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
  },
  coverBox: {
    backgroundImage: 'url(/about_cover.png)',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  innerBox: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  whiteBox: {
    backgroundColor: 'white',
    [theme.breakpoints.down(777)]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 40,
    },
  },
  visionBox: {
    [theme.breakpoints.down(777)]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
    },
  },
  sectionBox: {
    height: 240,
    [theme.breakpoints.down(777)]: {
      height: 120,
    },
  },
  missionBox: {
    backgroundColor: '#F6FAF0',
    [theme.breakpoints.down(777)]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
    },
  },
  philosophyBox: {
    [theme.breakpoints.down(777)]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
    },
  },
  number: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    fontSize: 150,
    position: 'absolute',
    color: '#AED1CE',
    [theme.breakpoints.down(777)]: {
      fontSize: 80,
    },
  },
  headline: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    position: 'relative',
    top: 120,
    left: 130,
    display: 'inline',
    [theme.breakpoints.down(777)]: {
      top: 48,
      left: 65,
      fontSize: 40,
    },
  },
  diagonalLine: {
    position: 'relative',
    width: 130,
    height: 130,
    backgroundImage: 'linear-gradient(to right bottom, transparent 50%, black 50%, black 51%, transparent 51%)',
    top: -15,
    left: 62,
    [theme.breakpoints.down(777)]: {
      width: 60,
      height: 60,
      top: -20,
      left: 32,
      backgroundImage: 'linear-gradient(to right bottom, transparent 49%, black 49%, black 51%, transparent 51%)',
    },
  },
  catchphrase: {
    fontFamily: "Corporate-Logo-Medium-ver2",
  },
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
    <Box className={classes.coverBox}>
      <Box pt="25vw" className={classes.innerBox}>
        <Box className={classes.whiteBox}>

          <Box p={10} className={classes.visionBox}>
            <Box className={classes.sectionBox}>
              <Typography className={classes.number}>
                01
              </Typography>
              <Typography variant="h3" className={classes.headline}>
                Vision
              </Typography>
              <Box className={classes.diagonalLine}/>
            </Box>
            <Grid container item xs={12} alignItems="center">
              <Grid container justify="center" item xs={3}>
                <img src='/vision_1.png' width="70%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase}>
                  ユーザーから愛されること
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box p={10} className={classes.missionBox}>
            <Box className={classes.sectionBox}>
              <Typography className={classes.number}>
                02
              </Typography>
              <Typography variant="h3" className={classes.headline}>
                Mission
              </Typography>
              <Box className={classes.diagonalLine}/>
            </Box>
            <Grid container item xs={12} alignItems="center">
              <Grid container justify="center" item xs={3}>
                <img src='/mission_1.png' width="70%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase} gutterBottom>
                  人々を笑顔に
                </Typography>
                <Typography>
                  エンターテインメントとは、「人生を色付け、より豊かにするもの」だと考えています。
                  人々に生きる楽しみや一歩踏み出すきっかけを与えるサービスを作ることが我々の使命です
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" style={{marginTop: 100}}>
              <Grid container justify="center" item xs={3}>
                <img src='/mission_2.png' width="70%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase} gutterBottom>
                  社会の効率化を
                </Typography>
                <Typography>
                  効率化には様々な手段があります。
                  その中でも我々はコミュニケーションを円滑にし、チームのモチベーションをあげることで社会の効率化を目指します。
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box p={10} className={classes.philosophyBox}>
            <Box className={classes.sectionBox}>
              <Typography className={classes.number}>
                03
              </Typography>
              <Typography variant="h3" className={classes.headline}>
                Philosophy
              </Typography>
              <Box className={classes.diagonalLine}/>
            </Box>
            <Grid container item xs={12} alignItems="center">
              <Grid container justify="center" item xs={3}>
                <img src='/philosophy_1.png' width="50%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase} gutterBottom>
                  新しいエンタメを届ける
                </Typography>
                <Typography>
                  効率化には様々な手段があります。
                  その中でも我々はコミュニケーションを円滑にし、チームのモチベーションをあげることで社会の効率化を目指します。
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" style={{marginTop: 100}}>
              <Grid container justify="center" item xs={3}>
                <img src='/philosophy_2.png' width="50%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase} gutterBottom>
                  やりたいことをやりたいだけ
                </Typography>
                <Typography>
                  各々がしたいことを尊重し、『やりたいことをやりたいだけ』任せることで最高のサービスをつくり上げます。
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" style={{marginTop: 100}}>
              <Grid container justify="center" item xs={3}>
                <img src='/philosophy_3.png' width="50%" style={{objectFit: "contain", maxWidth: 300 }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h4" className={classes.catchphrase} gutterBottom>
                  ユーザーとともに
                </Typography>
                <Typography>
                  ユーザーの意見を積極的に取り入れ、サービスを『ユーザーとともに』つくっていきます。
                </Typography>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Box>
      {/* <div className={classes.speakerDeckEmbed}>
        <div async className="speakerdeck-embed" data-slide="4" data-id="ab88cdaba19348a7a1333f27d68272cd" data-ratio="1.77777777777778" />
      </div> */}
    </Box>
  );
}
