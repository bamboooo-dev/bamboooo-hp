import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

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
  
  return (
    <Container className={classes.mainContainer}>
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
              世界の人々を笑顔に
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              社会の効率化を
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              好きなことを好きなだけ
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h5" gutterBottom>
              攻めの姿勢を忘れない
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
