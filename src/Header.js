import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import makeStyles from "@mui/styles/makeStyles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: "10px 50px 10px 50px",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 5px 0px 20px",
    },
  },
  logo: {
    height: 50,
    [theme.breakpoints.down("sm")]: {
      height: 40,
    },
  },
  toolbarLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  list: {
    width: 250,
    marginBottom: 20,
  },
  listItemText: {
    textAlign: "center",
  },
  listItemTextPrimary: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    fontSize: 20,
  },
  iconLink: {
    color: "inherit",
  },
  menuIcon: {
    fontSize: "3.5rem",
    color: "#19807B",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <img
            src="/bamboooo_logo.png"
            alt="Logo of bamboooo"
            className={classes.logo}
          />
        </Link>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          size="large"
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{ modal: classes.modal }}
      >
        <Box pr="15px" pt="10pt" style={{ textAlign: "right" }}>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={toggleDrawer(false)}
            size="large"
          >
            <CloseIcon style={{ fontSize: "1.5rem" }} />
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
                style={
                  router.pathname.substring(1) == section.url
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "#19807B70",
                        textDecorationThickness: "3px",
                      }
                    : {}
                }
              >
                <ListItem button key={section.title}>
                  <ListItemText
                    primary={section.title}
                    className={classes.listItemText}
                    primaryTypographyProps={{
                      className: classes.listItemTextPrimary,
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <IconButton color="inherit" aria-label="open twitter" size="large">
              <a
                href="https://twitter.com/bamboooo_inc"
                className={classes.iconLink}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" aria-label="open twitter" size="large">
              <a
                href="https://www.instagram.com/memolink.jp/"
                className={classes.iconLink}
                target="_blank"
                rel="noreferrer"
              >
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
      <g
        id="グループ_367"
        data-name="グループ 367"
        transform="translate(-1120 194.528)"
      >
        <circle
          id="楕円形_336"
          data-name="楕円形 336"
          cx="31.5"
          cy="31.5"
          r="31.5"
          transform="translate(1120 -194.528)"
          fill="#19807B"
        />
        <g
          id="グループ_366"
          data-name="グループ 366"
          transform="translate(1129.586 -175.781)"
        >
          <line
            id="線_1"
            data-name="線 1"
            x2="25.549"
            transform="translate(8.985 5.3)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          <line
            id="線_2"
            data-name="線 2"
            x2="25.549"
            transform="translate(8.985 12.954)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          <line
            id="線_3"
            data-name="線 3"
            x2="25.549"
            transform="translate(8.985 20.608)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

const CloseIcon = (props) => {
  return (
    <SvgIcon viewBox="0 0 39.507 41.743" {...props}>
      <g
        id="グループ_103"
        data-name="グループ 103"
        transform="translate(2.12 2.12)"
      >
        <line
          id="線_4"
          data-name="線 4"
          x2="35.266"
          y2="37.502"
          transform="translate(0)"
          fill="none"
          stroke="#19807B"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          id="線_5"
          data-name="線 5"
          x1="35.266"
          y2="37.502"
          transform="translate(0)"
          fill="none"
          stroke="#19807B"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </g>
    </SvgIcon>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
};
