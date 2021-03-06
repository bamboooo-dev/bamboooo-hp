import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider } from '@material-ui/core/styles';
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../src/Footer';
import Header from '../src/Header';
import { darkTheme, lightTheme } from '../src/theme';

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

  const [darkMode, setDarkMode] = React.useState(false);

  const handleDarkModeOn = () => {
    setDarkMode(true);
  };
  const handleDarkModeOff = () => {
    setDarkMode(false);
  };
  
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const MoonButton = () => {
    return (
      <IconButton color="inherit" onClick={handleDarkModeOn}>
        <Brightness4Icon />
      </IconButton>
    );
  }

  const SunButton = () => {
    return (
      <IconButton color="inherit" onClick={handleDarkModeOff}>
        <Brightness7Icon />
      </IconButton>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>bamboooo | Colors your life</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        { /* TODO: props で Component を渡してしまっているので美しくない気がする */}
        <Header title="bamboooo" sections={sections} modeButton={darkMode ? <SunButton /> : <MoonButton />}/>
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
