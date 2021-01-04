import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  continueReading: {
    color: theme.palette.tertiary.main,
  }
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

function PostCard(props){
  const classes = useStyles();
  const { post } = props;

  return(
    <Grid item xs={12}>
      <CardActionArea component="a" href={post.url} target="_blank">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {post.author}
              </Typography>
              <Typography variant="subtitle1" className={classes.continueReading}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default function Blog({ posts }) {

  const classes = useStyles();
  
  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      {posts.map((post) =>(
        <PostCard key={post.title} post={post} />
      ))}
    </Grid>
  );
}
