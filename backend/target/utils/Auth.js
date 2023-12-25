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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = exports.userLogin = exports.userRegister = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("../models/User");
const bcrypt = require("bcrypt");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET + "";
const MONGO_ENDPOINT = process.env.MONGO_ENDPOINT + "";
const SALT = process.env.SALT + "";
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MONGO_ENDPOINT);
    const hashPw = yield bcrypt.hash("test", SALT + "");
    console.log(hashPw);
    let userObj = { userName: "test", pw: hashPw };
    const user = yield User_1.User.findOne(userObj);
    if (!user)
        User_1.User.create(userObj);
});
init();
const userRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, pw } = req.body;
    if (pw.length < 6) {
        return res
            .status(400)
            .json({ message: "Password must be at least 6 characters." });
    }
    const hashPw = yield bcrypt.hash(pw, SALT + "");
    try {
        let userObj = { userName: userName, pw: hashPw };
        const user = yield User_1.User.findOne(userObj);
        if (user)
            return res.status(401).json({
                message: "User already exists!",
            });
        User_1.User.create(userObj)
            .then(() => res.status(200).json({
            message: "User successfully created!",
        }))
            .catch((err) => {
            res.status(401).json({
                message: "An error has occured. User may already exist.",
            });
        });
    }
    catch (err) {
        res.status(401).json({
            message: "User not successfully created!",
            error: err.mesage,
        });
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.userName;
    const rawPw = req.body.pw;
    const hashPw = yield bcrypt.hash(rawPw, SALT + "");
    try {
        let userObj = { userName: userName, pw: hashPw };
        const user = yield User_1.User.findOne(userObj);
        if (user) {
            const maxAge = 3 * 60 * 60; // 3 hrs in seconds
            let token = jsonwebtoken_1.default.sign({ userName: userName }, JWT_SECRET, {
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
                message: "Login not successful.",
                error: "User/Password is incorrect.",
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
const userAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.jwt;
    if (token) {
        jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return res.status(401).json({ message: "Not authorized" });
            }
            else {
                const user = yield User_1.User.findOne({ userName: decodedToken.userName });
                if (user) {
                    next();
                }
                else {
                    return res.status(401).json({ message: "Not authorized" });
                }
            }
        }));
    }
    else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" });
    }
});
exports.userAuth = userAuth;
