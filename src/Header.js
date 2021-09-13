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
    padding: '10px 50px 10px 50px',
    justifyContent: "space-between",
    [theme.breakpoints.down(777)]: {
      padding: '0px 5px 0px 20px',
    },
  },
  logo: {
    height: 50,
    [theme.breakpoints.down(777)]: {
      height: 40,
    },
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
  iconLink: {
    color: 'inherit',
  },
  menuIcon: {
    fontSize: '3.5rem',
    color: '#19807B',
    [theme.breakpoints.down(777)]: {
      fontSize: '3rem',
    },
  }
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
          <MenuIcon className={classes.menuIcon} />
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
            <IconButton
              color="inherit"
              aria-label="open twitter"
            >
              <a href="https://twitter.com/bamboooo_inc" className={classes.iconLink} target="_blank">
                <TwitterIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              aria-label="open twitter"
            >
              <a href="https://www.instagram.com/bamboooo_inc" className={classes.iconLink} target="_blank">
                <InstagramIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}

const MenuIcon = (props) => {
  
  return (
    <SvgIcon viewBox="0 0 63 63" {...props}>
      <g id="グループ_367" data-name="グループ 367" transform="translate(-1120 194.528)">
        <circle id="楕円形_336" data-name="楕円形 336" cx="31.5" cy="31.5" r="31.5" transform="translate(1120 -194.528)" fill="#19807B"/>
        <g id="グループ_366" data-name="グループ 366" transform="translate(1129.586 -175.781)">
          <line id="線_1" data-name="線 1" x2="25.549" transform="translate(8.985 5.3)" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
          <line id="線_2" data-name="線 2" x2="25.549" transform="translate(8.985 12.954)" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
          <line id="線_3" data-name="線 3" x2="25.549" transform="translate(8.985 20.608)" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/>
        </g>
      </g>
    </SvgIcon>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
};
