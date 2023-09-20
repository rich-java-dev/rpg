import express, { Express, Request, Response } from "express";
import { Player } from "../game-classes/Player";
import { world } from "../index";

const router = express.Router();

router.get("/:playerId", (req: Request, res: Response) => {
  let playerIndex: number = world.players.findIndex(
    (player) => player.id == req.params.playerId
  );

  if (playerIndex > -1) {
    let player: Player = world.players[playerIndex];
    res.json(player.toJSON());
  } else res.send("No Player here...");
});

export { router as PlayerRouter };
