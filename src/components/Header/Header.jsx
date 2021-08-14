import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { getSignedIn } from "../../reducks/users/selectors";
import logo from "../../assets/img/icons/logo.png";
import { push } from "connected-react-router";
import { HeaderMenus } from "./index";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          <img
            alt="Logo"
            src={logo}
            width="128px"
            onClick={() => dispatch(push("/"))}
            role="button"
          />
          {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenus />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
