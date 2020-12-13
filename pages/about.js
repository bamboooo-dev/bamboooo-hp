import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function About() {
  return (
    <Container>
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
