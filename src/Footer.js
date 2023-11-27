import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 50,
  },
  logoBox: {
    textAlign: "center",
  },
  toolbarLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  toolbarTypography: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    fontSize: 16,
  },
  gridContainer: {
    marginTop: 25,
  },
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 40,
      marginRight: 40,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  footer: {
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: "#f5ffec",
  },
  snsToolbar: {
    marginTop: 30,
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
    },
  },
  iconLink: {
    color: "inherit",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <footer className={classes.footer}>
      <Box className={classes.logoBox}>
        <Link href="/">
          <img
            src="/bamboooo_logo-removebg.png"
            alt="Logo of bamboooo"
            className={classes.logo}
          />
        </Link>
      </Box>
      <Toolbar>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          className={classes.gridContainer}
        >
          {sections.map((section) => (
            <Grid item className={classes.gridItem} key={section.title}>
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                <Typography variant="h6" className={classes.toolbarTypography}>
                  {section.title}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
      <Toolbar className={classes.snsToolbar}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <a
              href="https://twitter.com/bamboooo_inc"
              className={classes.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/memolink.jp/"
              className={classes.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
