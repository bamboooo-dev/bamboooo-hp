import { Box, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';
import { getSortedPostsData } from '../../lib/posts';
import Link from '../../src/Link';

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
    backgroundImage: 'url(/blog_cover.png)',
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
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, .3)',
    marginBottom: 30,
    [theme.breakpoints.down(777)]: {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40,
      maxWidth: '90%',
    },
  },
  titleTypgraphy:{
    [theme.breakpoints.up(777)]: {
      minHeight: 128,
    },
  },
  postBox:{
    [theme.breakpoints.down(777)]: {
      marginBottom: 150,
    },
  },
}));

const urls = [
  'https://qiita.com/monaka0721/feed.atom',
  'https://qiita.com/yamagai/feed.atom'
];

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pageNum: '1' } },
      { params: { pageNum: '2' } },
    ],
    fallback: false
  };
}

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
  const router = useRouter();
  const { pageNum } = router.query

  
  return (
    <>
      <Box className={classes.coverBox}>
        <Box pt="25vw" className={classes.innerBox} display="flex" justifyContent="center">
          <Grid container spacing={matches ? 0 : 5} className={classes.whiteBox}>
            {posts.slice(9*(pageNum-1), 9*pageNum).map((post) =>(
              <PostBox key={post.title} post={post} />
            ))}
            <Grid item xs={12}>
              <Box w="100%" display="flex" justifyContent="center" my={8} alignItems="center">
                {[...Array(Math.ceil(posts.length / 9)).keys()].map((pageIndex) => (
                  pageIndex + 1 == pageNum ? 
                    <Box>
                      <Typography variant="h5" style={{fontFamily: "Corporate-Logo-Medium-ver2"}}>
                        {pageIndex + 1}
                      </Typography>
                      <Divider style={{backgroundColor: "#19807B", height: 3}}/>
                    </Box> :
                    <Link href={`/blog/${pageIndex+1}`} style={{textDecoration: 'none'}}>
                      <Typography variant="h6" color="textSecondary" style={{fontSize: 18, fontFamily: "Corporate-Logo-Medium-ver2", marginLeft: 15, marginRight: 15}}>
                        {pageIndex + 1}
                      </Typography>
                    </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
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
          <Box style={{color: "#19807B", border: "1px solid", borderRadius: 10, paddingLeft: 15, paddingRight: 15}}>
            <span>{post.category}</span>
          </Box>
        </Box>
        <Divider style={{backgroundColor: "grey", marginBottom: 10}} />
        <Box position="relative">
          <Typography variant="subtitle1">
            {post.lead}...
          </Typography>
          <a href={post.url} target="_blank" style={{position: "absolute", right: 10, bottom: 5, color: "#19807B", textDecoration: "none"}}>{">>"}</a>
        </Box>
      </Box>
    </Grid>
  )
}
