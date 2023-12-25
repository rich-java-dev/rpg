"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const WorldSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    items: {
        type: (Array),
        default: [],
    },
    itemPositions: {
        type: (Array),
        default: [],
    },
    players: {
        type: (Array),
        default: [],
    },
    playerPositions: {
        type: (Array),
    },
    enemies: {
        type: (Array),
    }
});
exports.World = mongoose_1.default.model("World", WorldSchema);
