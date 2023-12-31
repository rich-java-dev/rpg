"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const Auth_1 = require("../utils/Auth");
const jwt = __importStar(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const router = express_1.default.Router();
exports.AuthRouter = router;
/**
 * LOGIN END-POINT
 */
router.post("/login", Auth_1.userLogin);
/**
 * REGISTER USER END-POINT
 */
router.post("/sign-up", Auth_1.userRegister);
/**
 * END-POINT protected behind userAuth middle-ware
 */
router.get("/profile", Auth_1.userAuth, (req, res) => {
    const token = req.cookies.jwt;
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            res.send("ERROR");
        }
        else {
            const userName = decodedToken.userName;
            res.send(`Welcome ${userName}! you are logged in!`);
        }
    });
});
