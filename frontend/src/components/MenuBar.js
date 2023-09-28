import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { clearCanvas } from "./MainView";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedItem: {
    color: "blue",
    backgroundColor: "gray",
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
});

export const MenuBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const gotoLink = (path) => history.push(path);

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolBar}>
          <Typography>
            <Box fontWeight="600" fontSize={24}>
              RPG!
            </Box>
          </Typography>

          <Button color="inherit" onClick={() => gotoLink("")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => gotoLink("/about")}>
            About
          </Button>

          <Button color="inherit" onClick={() => gotoLink("/profile")}>
            Profile
          </Button>

          <Button color="inherit" onClick={() => gotoLink("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
