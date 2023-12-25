"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserIpSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    ip: {
        type: String,
        minlength: 8,
        required: true,
    },
});
exports.User = mongoose_1.default.model("UserIp", UserIpSchema);
