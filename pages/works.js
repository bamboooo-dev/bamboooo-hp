import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}));

const works = [
  { 
    name: 'memopic',
    description: '思い出共有サイトです',
    url: 'https://www.memopic.net',
  },
  { 
    name: 'Memorip',
    description: '旅行プラン共有サイトです',
    url: 'https://memorip.net',
  },
];

function Work(props) {
  const classes = useStyles();
  const { name, description, url } = props; 
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardActionArea component="a" href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function Works() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Grid container spacing={4}>
        {works.map((work) => (
          <Work key={work.name} description={work.description} name={work.name} url={work.url} />
        ))}
      </Grid>
    </Container>
  )
}
