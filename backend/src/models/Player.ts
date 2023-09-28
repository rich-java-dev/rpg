import mongoose from "mongoose";
import { Item } from "./Item";

const Schema = mongoose.Schema;

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

  inventory: { type: Array<Item>, required: true, default: [] },
});

export const Player = mongoose.model("Player", PlayerSchema);
