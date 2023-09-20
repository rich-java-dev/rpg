import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { World } from "./game-classes/World";
import { Player } from "./game-classes/Player";
import { PlayerRouter } from "./routes/PlayerRouter";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

export let world: World;

const init = () => {
  world = new World();

  let player: Player = new Player();
  player.id = "RW";
  player.name = "Rich";
  world.players.push(player);
};
init();

app.use("/player", PlayerRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
