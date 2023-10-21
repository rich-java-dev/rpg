import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, TextField, Button, Card, CardContent } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    top: "33%",
    left: "33%",
    position: "absolute",
  },
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const gotoLink = (path) => history.push(path);

  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const updateUserName = (e) => {
    const val = e.target.value;
    setUserName(val);
  };

  const updatePw = (e) => {
    const val = e.target.value;
    setPw(val);
  };

  const loginButtonPerformed = async () => {
    console.log(userName);
    console.log(pw);

    fetch("https://gaming.richwhite.net/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userName: userName, pw: pw }),
    })
      .then((res) => res.text())
      .then((text) => {
        alert(text);
        gotoLink("/profile");
      });
  };

  const signUpButtonPerformed = async () => {
    console.log(userName);
    console.log(pw);

    fetch("https://gaming.richwhite.net/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userName: userName, pw: pw }),
    })
      .then((res) => res.text())
      .then((text) => {
        alert(text);
      });
  };

  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="filled-required"
                label="User"
                value={userName}
                onChange={updateUserName}
              />
            </div>

            <div>
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={pw}
                onChange={updatePw}
              />
            </div>

            <div>
              <Button onClick={() => loginButtonPerformed()}>Log In</Button>
            </div>

            <div>
              <Button onClick={() => signUpButtonPerformed()}>Sign Up</Button>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
