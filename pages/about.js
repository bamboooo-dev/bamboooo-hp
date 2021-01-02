import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}));

export default function About() {
  const classes = useStyles();
  
  return (
    <Container className={classes.mainContainer}>
      <Typography variant="h4" gutterBottom>
        Philosophy
      </Typography>
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          新しいエンタメを
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          好きなことを好きなだけ
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          攻めの姿勢を忘れない
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
    </Container>
  );
}
