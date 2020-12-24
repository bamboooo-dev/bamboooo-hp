import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

function Member(props) {
  const { member } = props;
  const classes = useStyles();
  
  return (
    <Grid item xs={12} md={3}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.large} />
      <Typography variant="h6">
        {member.position}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {member.university}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {member.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {member.description}
      </Typography>
    </Grid>
  )
}

const members = [
  { 
    position: 'Infrastructure Engineer',
    university: '北海道大学',
    name: '山本 浩平',
    description: 'k8s。猫好き。初めての料理は炒り卵。',
  },
  { 
    position: 'Backend Engineer',
    university: '京都大学',
    name: '住江 祐哉',
    description: 'パフォーマンス・チューナー。満島ひかりが好き。',
  },
  { 
    position: 'Planner',
    university: '京都大学',
    name: '朝田 隼平',
    description: '筋トレが趣味。',
  },
  { 
    position: 'Planner',
    university: '京都大学',
    name: '中林 健人',
    description: 'UchiUchi 代表。',
  }
];

export default function Members() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        MEMBERS
      </Typography>
      <Grid container spacing={4}>
        {members.map((member) => (
          <Member key={member.name} member={member} /> 
        ))}
      </Grid>
    </Container>
  );
}
