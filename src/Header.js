import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    height: 70,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.tertiary.main,
    },
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
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
