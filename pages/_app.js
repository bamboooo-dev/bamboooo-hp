import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../src/Footer';
import Header from '../src/Header';
import { lightTheme } from '../src/theme';

const sections = [
  { title: 'ABOUT', url: 'about' },
  { title: 'MEMBERS', url: 'members' },
  { title: 'WORKS', url: 'works' },
  { title: 'SKILLS', url: 'skills' },
  { title: 'HISTORY', url: 'history' },
  { title: 'BLOG', url: 'blog' },
  { title: 'CONTACT', url: 'contact' },
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
        <title>bamboooo | Colors your life</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header sections={sections} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
