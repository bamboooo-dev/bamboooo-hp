import { Box, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { getSortedPostsData } from '../lib/posts';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 320,
  },
  continueReading: {
    color: theme.palette.tertiary.main,
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
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down(777)]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 40,
    },
  },
  titleTypgraphy:{
    [theme.breakpoints.up(777)]: {
      minHeight: 128,
    },
  },
  postBox:{
    [theme.breakpoints.down(777)]: {
      marginBottom: 30,
    },
  },
}));

const urls = [
  'https://qiita.com/monaka0721/feed.atom',
  'https://qiita.com/yamagai/feed.atom'
];

export async function getStaticProps() {
  const posts = await getSortedPostsData(urls);
  return {
    props: {
      posts
    }
  }
}

export default function Blog({ posts }) {

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(777));
  
  return (
    <>
      <Box className={classes.coverBox}>
        <Box pt="25vw" className={classes.innerBox}>
          <Grid container spacing={matches ? 0 : 5} className={classes.whiteBox}>
            {posts.map((post) =>(
              <PostBox key={post.title} post={post} />
            ))}
          </Grid>
          <Box w="100%" display="flex" justifyContent="center" my={8}>
            <Box>
              <Typography variant="h4" style={{fontFamily: "Corporate-Logo-Medium-ver2"}}>
                1
              </Typography>
              <Divider style={{backgroundColor: "green", height: 3}}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function PostBox(props){
  const { post } = props;
  const classes = useStyles();

  return(
    <Grid item xs={12} sm={4} className={classes.postBox}>
      <Box display="flex" flexDirection="column">
        <img src={post.image} width="100%" style={{marginBottom: 20, borderRadius: 5}}/>
        <Typography variant="h6" className={classes.titleTypgraphy}>
          {post.title}
        </Typography>
        <Box display="flex" alignItems="center" width="100%" mt={1} mb={2}>
          <Box width="40%">
            <Typography variant="subtitle1">
              {post.date}
            </Typography>
          </Box>
          <Box style={{color: "green", border: "1px solid", borderRadius: 10, paddingLeft: 15, paddingRight: 15}}>
            <span>カテゴリ</span>
          </Box>
        </Box>
        <Divider style={{backgroundColor: "grey", marginBottom: 10}} />
        <Box position="relative">
          <Typography variant="subtitle1">
            {post.lead}...
          </Typography>
          <a href={post.url} target="_blank" style={{position: "absolute", right: 10, bottom: 5, color: "green", textDecoration: "none"}}>{">>"}</a>
        </Box>
      </Box>
    </Grid>
  )
}
