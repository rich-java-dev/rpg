import mongoose from "mongoose";
import { Item } from "./Item";

const Schema = mongoose.Schema;

const NpcSchema = new Schema({

  name: { type: String, required: true, unique: true },

  maxHp: { type: Number, required: true, default: 100 },

  maxMp: { type: Number, required: true, default: 100 },

  level: { type: Number, required: true, default: 1 },
  strength: { type: Number, required: true, default: 10 },
  wisdom: { type: Number, required: true, default: 10 },
  dexterity: { type: Number, required: true, default: 10 },

  hp: { type: Number, required: true, default: 100 },
  mp: { type: Number, required: true, default: 100 },

});

export const Npc = mongoose.model("Npc", NpcSchema);
