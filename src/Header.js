import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '25px 10px 25px 30px',
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
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
  toolbarLink: {
    flex: "1 0 100px",
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
  list: {
    width: 250,
  },
  listItemText: {
    textAlign: 'center',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  }

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
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
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

      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} classes={{modal: classes.modal}}>
        <div
          className={classes.list}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {sections.map((section) => (
              <ListItem button key={section.title}>
                <ListItemText primary={section.title} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
