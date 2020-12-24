import Container from '@material-ui/core/Container';
import React from 'react';
import MainFeaturedPost from '../src/MainFeaturePost';

const mainFeaturedPost = {
  title: 'bamboooo',
  description:
    "Colors your life.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Index() {
  
  return (
    <Container>
      <MainFeaturedPost post={mainFeaturedPost} />
    </Container>
  );
}
