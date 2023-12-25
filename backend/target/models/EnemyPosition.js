"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyPosition = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const EnemyPositionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    posX: { type: Number, required: true, default: 0 },
    poxY: { type: Number, required: true, default: 0 },
});
exports.EnemyPosition = mongoose_1.default.model("EnemyPosition", EnemyPositionSchema);
