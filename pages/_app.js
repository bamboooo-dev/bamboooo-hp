import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import "../public/fonts/fonts.css";
import Footer from "../src/Footer";
import Header from "../src/Header";
import theme from "../src/theme";

const sections = [
  { title: "About", url: "/about" },
  { title: "Members", url: "/members" },
  { title: "Works", url: "/works" },
  { title: "History", url: "/history" },
  { title: "Blog", url: "/blog/1" },
  { title: "Contact", url: "/contact" },
];

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>bamboooo | Colors your life</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header sections={sections} />
          <Component {...pageProps} />
          <Footer sections={sections} />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
