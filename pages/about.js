import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  contents: {
    padding: 15,
    borderStyle: "solid",
    borderWidth: "0 36px 0 36px",
    borderColor: "#DFFFD6",
  },
  divider: {
    height: 4,
    backgroundColor: theme.palette.tertiary.main,
  },
  headline: {
    fontFamily: "Corporate-Logo-Bold-ver2",
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
    <Container>
      <Grid container>
        <img src='/about_top.jpg' width="100%" />
      </Grid>
      <div className={classes.contents}>
        <Grid container>
          <Grid item xs={12}>
            <img src='/vision.png' width="25%" />
          </Grid>
          <Grid container item xs={12}>
            <Grid container justify="center" item xs={4}>
              <img src='/vision_1.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                ユーザーから愛されること
              </Typography>     
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <img src='/mission.png' width="29%" />
          </Grid>
          <Grid container item xs={12}>
            <Grid container justify="center" item xs={4}>
              <img src='/mission_1.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                人々を笑顔に
              </Typography>     
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid container justify="center" item xs={4}>
              <img src='/mission_2.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                社会の非効率を
              </Typography>     
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <img src='/philosophy.png' width="38%" />
          </Grid>
          <Grid container item xs={12}>
            <Grid container justify="center" item xs={4}>
              <img src='/philosophy_1.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                新しいエンタメを届ける
              </Typography>     
            </Grid>
            <Grid container justify="center" item xs={4}>
              <img src='/philosophy_2.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                やりたいことをやりたいだけ
              </Typography>     
            </Grid>
            <Grid container justify="center" item xs={4}>
              <img src='/philosophy_3.png' width="70%" />
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" gutterBottom className={classes.headline}>
                ユーザーとともに
              </Typography>     
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={5}>
        <Grid item md={4}>
          <Typography variant="h4" gutterBottom>
            Mission
          </Typography>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={8}>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              人々を笑顔に
            </Typography>
            <Typography variant="body1" gutterBottom>
              エンターテインメントとは、「人生を色付け、より豊かにするもの」だと考えています。<br/>
              人々に生きる楽しみや一歩踏み出すきっかけを与えるサービスを作ることが我々の使命です。
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              社会の効率化を
            </Typography>
            <Typography variant="body1" gutterBottom>
            効率化には様々な手段があります。<br/>
            その中でも我々はコミュニケーションを円滑にし、チームのモチベーションをあげることで社会の効率化を目指します。
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item md={4}>
          <Typography variant="h4" gutterBottom>
            Philosophy
          </Typography>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={8}>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              新しいエンタメを
            </Typography>
            <Typography variant="body1" gutterBottom>
              既存のものに囚われず、ユーザーにとって新鮮で、生活を面白くする『新しいエンタメを』つくり続けます。
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              やりたいことをやりたいだけ
            </Typography>
            <Typography variant="body1" gutterBottom>
              各々がしたいことを尊重し、『やりたいことをやりたいだけ』任せることで最高のサービスをつくり上げます。
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              ユーザーとともに
            </Typography>
            <Typography variant="body1" gutterBottom>
              ユーザーの意見を積極的に取り入れ、サービスを『ユーザーとともに』つくっていきます。
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <div async className="speakerdeck-embed" data-slide="4" data-id="ab88cdaba19348a7a1333f27d68272cd" data-ratio="1.77777777777778" />
    </Container>
  );
}
