"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    pw: {
        type: String,
        minlength: 4,
        required: true,
    },
});
exports.User = mongoose_1.default.model("User", UserSchema);
