// Auth.js

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/User";
const bcrypt = require("bcrypt");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET + "";
const MONGO_ENDPOINT = process.env.MONGO_ENDPOINT + "";
const SALT = process.env.SALT + "";

const init = async () => {
  await mongoose.connect(MONGO_ENDPOINT);

  const hashPw = await bcrypt.hash("test", SALT + "");
  console.log(hashPw);
  let userObj = { userName: "test", pw: hashPw };
  const user = await User.findOne(userObj);
  if (!user) User.create(userObj);
};
init();

export const userRegister = async (req: any, res: any, next: any) => {
  const { userName, pw } = req.body;
  if (pw.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters." });
  }

  const hashPw = await bcrypt.hash(pw, SALT + "");

  try {
    let userObj = { userName: userName, pw: hashPw };

    const user = await User.findOne(userObj);
    if (user)
      return res.status(401).json({
        message: "User already exists!",
      });

    User.create(userObj)
      .then(() =>
        res.status(200).json({
          message: "User successfully created!",
        })
      )
      .catch((err) => {
        res.status(401).json({
          message: "An error has occured. User may already exist.",
        });
      });
  } catch (err: any) {
    res.status(401).json({
      message: "User not successfully created!",
      error: err.mesage,
    });
  }
};

export const userLogin = async (req: any, res: any, next: any) => {
  const userName = req.body.userName;
  const rawPw = req.body.pw;
  const hashPw = await bcrypt.hash(rawPw, SALT + "");

  try {
    let userObj = { userName: userName, pw: hashPw };
    const user = await User.findOne(userObj);
    if (user) {
      const maxAge = 3 * 60 * 60; // 3 hrs in seconds

      let token = jwt.sign({ userName: userName }, JWT_SECRET, {
        expiresIn: maxAge,
      });

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });

      res.status(200).json({
        message: "Login successful",
        user: userName,
      });
    } else {
      res.status(401).json({
        message: "Login not successful.",
        error: "User/Password is incorrect.",
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

export const userAuth = async (req: any, res: any, next: any) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, JWT_SECRET, async (err: any, decodedToken: any) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        const user = await User.findOne({ userName: decodedToken.userName });
        if (user) {
          next();
        } else {
          return res.status(401).json({ message: "Not authorized" });
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};
