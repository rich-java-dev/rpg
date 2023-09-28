import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

import { userLogin, userAuth } from "../utils/Auth";
import { Player } from "../models/Player";

dotenv.config();

const MONGO_ENDPOINT = process.env.MONGO_ENDPOINT + "";
const JWT_SECRET: any = process.env.JWT_SECRET;

const router: Router = express.Router();

const init = async () => {
  await mongoose.connect(MONGO_ENDPOINT);
};
init();

router.get("/", userAuth, async (req: Request, res: Response) => {
  const token = req.cookies.jwt;
  jwt.verify(token, JWT_SECRET, async (err: any, decodedToken: any) => {
    if (err) {
      res.send("ERROR");
    } else {
      const userName = decodedToken.userName;

      const player = await Player.find({ id: userName });
      if (player) res.json(player);
      else res.send("No Player here...");
    }
  });
});

export { router as PlayerRouter };
