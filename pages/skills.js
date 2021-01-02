import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 1000,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}));

const frontends = [
  {
    img: '/react.png',
    title: 'React',
  },
  {
    img: '/next.png',
    title: 'NEXT',
  },
  {
    img: '/vue.png',
    title: 'Vue',
  },
];

const backends = [
  {
    img: '/rails.svg',
    title: 'Rails',
  },
  {
    img: '/golang.png',
    title: 'Golang',
  },
];

const middlewares = [
  {
    img: '/mysql.png',
    title: 'MySQL',
  },
  {
    img: '/nginx.png',
    title: 'nginx',
  },
];

const infrastructures = [
  {
    img: '/kubernetes.png',
    title: 'kubernetes',
  },
];

const gameEngines = [
  {
    img: '/unity.png',
    title: 'Unity',
  },
];

const others = [
  {
    img: '/pytorch.png',
    title: 'PyTorch',
  },
];

const communications = [
  {
    img: '/slack.png',
    title: 'Slack',
  },
  {
    img: '/notion.png',
    title: 'Notion',
  },
];

function Skill(props) {
  const { title, field } = props;

  const theme = useTheme();
  const classes = useStyles();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={matchesXs ? 2 : 5}>
          {field.map((skill) => (
            <GridListTile key={skill.img} cols={1}>
              <img src={skill.img} alt={skill.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Box>
  )
}

export default function Skills() {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Skill title="Frontend" field={frontends} />
      <Skill title="Backend" field={backends} />
      <Skill title="Middleware" field={middlewares} />
      <Skill title="Infrastructures" field={infrastructures} />
      <Skill title="Game Engine" field={gameEngines} />
      <Skill title="Others" field={others} />
      <Skill title="Communication" field={communications} />  
    </Container>
  );
}
