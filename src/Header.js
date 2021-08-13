import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: '25px 10px 25px 30px',
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
  },
  toolbarLink: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#E1E1E1',
    },
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

  const router = useRouter();

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
        >
          <MenuIcon style={{fontSize: '2.5rem', color: '#19807B'}} />
        </IconButton>
      </Toolbar>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} classes={{modal: classes.modal}}>
        <Box pr='5px' style={{textAlign: 'right'}}>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon style={{fontSize: '4rem', color: '#19807B'}} />
          </IconButton>
        </Box>
        <div
          className={classes.list}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                <ListItem button key={section.title}>
                  <ListItemText primary={section.title} className={classes.listItemText} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <TwitterIcon fontSize="large" />
          </Grid>
          <Grid item>
            <InstagramIcon fontSize="large" />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
