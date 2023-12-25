"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPosition = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PlayerPositionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    posX: { type: Number, required: true, default: 0 },
    poxY: { type: Number, required: true, default: 0 },
});
exports.PlayerPosition = mongoose_1.default.model("PlayerPosition", PlayerPositionSchema);
