import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    backgroundImage: 'url(/coloryourlife.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
}));

export default function MainPaper(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainPaper}>
      {/* Increase the priority of the hero background image  */}　
      {<img style={{ display: 'none' }} src="/topCover.jpg" alt='main image description' />}
      <div className={classes.overlay} />
        <Grid container>
        <Grid item xs={12}>
          <Box textAlign="center" position="relative">
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              bamboooo
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Colors your life.
            </Typography>
            <Link variant="subtitle1" href="/about">
              about…
            </Link>
          </Box>
        </Grid>
      </Grid> 
    </Paper>
  );
}






