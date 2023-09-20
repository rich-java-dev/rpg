"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.world = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const World_1 = require("./game-classes/World");
const Player_1 = require("./game-classes/Player");
const PlayerRouter_1 = require("./routes/PlayerRouter");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
const init = () => {
    exports.world = new World_1.World();
    let player = new Player_1.Player();
    player.id = "RW";
    player.name = "Rich";
    exports.world.players.push(player);
};
init();
app.use("/player", PlayerRouter_1.PlayerRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
