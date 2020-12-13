import Container from '@material-ui/core/Container';
import React from 'react';
import MainFeaturedPost from '../src/MainFeaturePost';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
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
