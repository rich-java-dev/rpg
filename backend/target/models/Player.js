"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PlayerSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    maxHp: { type: Number, required: true, default: 100 },
    maxMp: { type: Number, required: true, default: 100 },
    level: { type: Number, required: true, default: 1 },
    strength: { type: Number, required: true, default: 10 },
    wisdom: { type: Number, required: true, default: 10 },
    dexterity: { type: Number, required: true, default: 10 },
    hp: { type: Number, required: true, default: 100 },
    mp: { type: Number, required: true, default: 100 },
    posX: { type: Number, required: true, default: 0 },
    poxY: { type: Number, required: true, default: 0 },
    inventory: { type: (Array), required: true, default: [] },
});
exports.Player = mongoose_1.default.model("Player", PlayerSchema);
