import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    height: 70,
  },
  toolbarContainer: {
    overflowX: 'scroll',
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: 48,
  },
  toolbarItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbarLinkBox: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    flex: "1 0 100px",
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#E1E1E1',
    },
  },
  sectionTitle: {
    fontFamily: ['"Helvetica"'],
    color: '#3B3B3B',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <img
            src='/bamboooo_logo.png'
            alt='Logo of bamboooo'
            className={classes.logo}
          />
        </Link>
      </Toolbar>
      <Grid container wrap="nowrap" className={classes.toolbarContainer}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            <Grid item container justify="center" alignItems="center" style={{height: '100%'}}>
              <Typography
                className={classes.sectionTitle}
                variant="h6"
              >
                {section.title}
              </Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
