import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';
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
    },
  },
  list: {
    width: 250,
  },
  listItemText: {
    textAlign: 'center',
  },
  listItemTextPrimary: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    fontSize: 24,
  },
  st0: {
    fill: '#19807B',
  },
  twitterLink: {
    color: 'inherit',
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
          <MenuIcon style={{fontSize: '4rem', color: '#19807B'}} />
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
                style={(router.pathname.substring(1) == section.url) ? { textDecoration: 'underline', textDecorationColor: '#19807B70', textDecorationThickness: '3px' }: {}}
              >
                <ListItem button key={section.title}>
                  <ListItemText primary={section.title} className={classes.listItemText} primaryTypographyProps={{className: classes.listItemTextPrimary}}/>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <a href="https://twitter.com/bamboooo_inc" className={classes.twitterLink} target="_blank">
              <TwitterIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <InstagramIcon fontSize="large" />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}

const MenuIcon = (props) => {
  const classes = useStyles();
  
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <g>
        <path className={classes.st0} d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M362.667,362.667H149.333
          c-11.797,0-21.333-9.557-21.333-21.333c0-11.776,9.536-21.333,21.333-21.333h213.333c11.797,0,21.333,9.557,21.333,21.333
          C384,353.109,374.464,362.667,362.667,362.667z M362.667,277.333H149.333C137.536,277.333,128,267.776,128,256
          s9.536-21.333,21.333-21.333h213.333c11.797,0,21.333,9.557,21.333,21.333S374.464,277.333,362.667,277.333z M362.667,192H149.333
          C137.536,192,128,182.443,128,170.667s9.536-21.333,21.333-21.333h213.333c11.797,0,21.333,9.557,21.333,21.333
          S374.464,192,362.667,192z"/>
      </g>
    </SvgIcon>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
