import mongoose from "mongoose";
import { Item } from "./Item";

const Schema = mongoose.Schema;

const PlayerInventorySchema = new Schema({
  
  name: { type: String, required: true, unique: true },

  inventory: {
    type: Array<Item>,
    required: true,
    default: [],
  },
});

export const PlayerInventory = mongoose.model(
  "PlayerInventory",
  PlayerInventorySchema
);
