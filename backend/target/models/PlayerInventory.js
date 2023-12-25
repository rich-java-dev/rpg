"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInventory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PlayerInventorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    inventory: {
        type: (Array),
        required: true,
        default: [],
    },
});
exports.PlayerInventory = mongoose_1.default.model("PlayerInventory", PlayerInventorySchema);
