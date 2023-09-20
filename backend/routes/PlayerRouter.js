"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRouter = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("../index");
const router = express_1.default.Router();
exports.PlayerRouter = router;
router.get("/:playerId", (req, res) => {
    let playerIndex = index_1.world.players.findIndex((player) => player.id == req.params.playerId);
    if (playerIndex > -1) {
        let player = index_1.world.players[playerIndex];
        res.json(player.toJSON());
    }
    else
        res.send("No Player here...");
});
