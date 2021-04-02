import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(3),
  },
  divider: {
    height: 4,
    backgroundColor: theme.palette.tertiary.main,
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
    <Container className={classes.mainContainer}>
            <Grid container spacing={5}>
        <Grid item md={4}>
          <Typography variant="h4" gutterBottom>
            Vision
          </Typography>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={8}>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              愛される会社になる
            </Typography>
          </Box>
        </Grid>
      </Grid>
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
