import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../src/Footer';
import Header from '../src/Header';
import theme from '../src/theme';

const sections = [
  { title: 'ABOUT', url: 'about' },
  { title: 'MEMBERS', url: '#' },
  { title: 'WORKS', url: '#' },
  { title: 'SKILLS', url: '#' },
  { title: 'BLOG', url: '#' },
  { title: 'CONTACT', url: '#' },
  { title: 'RECRUIT', url: '#' },
];

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>bamboooo | 新しいエンタメを</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="bamboooo" sections={sections} />
          <Component {...pageProps} />
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
