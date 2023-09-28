"use strict";
// Auth.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = exports.userLogin = exports.userRegister = void 0;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// enable .env file
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_ENDPOINT = process.env.MONGO_ENDPOINT;
const SALT = process.env.SALT;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const models = require("./models");
const UserSchema = models.UserSchema;
const User = mongoose.model("User", UserSchema);
let load = false;
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(MONGO_ENDPOINT);
    const hashPw = yield bcrypt.hash("test", SALT + "");
    console.log(hashPw);
    let userObj = { userName: "test", pw: hashPw };
    const user = yield User.findOne(userObj);
    if (!user)
        User.create(userObj);
    load = true;
});
const userRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, pw } = req.body;
    if (pw.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" });
    }
    try {
        yield User.create({
            userName,
            pw,
        }).then((user) => res.status(200).json({
            message: "User successfully created",
            user,
        }));
    }
    catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: err.mesage,
        });
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.userName;
    const rawPw = req.body.pw;
    const hashPw = yield bcrypt.hash(rawPw, SALT + "");
    if (!load)
        yield init();
    try {
        let userObj = { userName: userName, pw: hashPw };
        const user = yield User.findOne(userObj);
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
        }
        else {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        });
    }
});
exports.userLogin = userLogin;
const userAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Not authorized" });
            }
            else {
                if (decodedToken.userName !== "test") {
                    return res.status(401).json({ message: "Not authorized" });
                }
                else {
                    next();
                }
            }
        });
    }
    else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" });
    }
};
exports.userAuth = userAuth;
