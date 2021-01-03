import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MainPaper from '../src/MainPaper';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <MainPaper />
    </Container>
  );
}
