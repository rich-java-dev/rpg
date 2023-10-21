import mongoose from "mongoose";
import { Player } from "./Player";
import { Enemy } from "./Enemy";
import { Item } from "./Item";
import {PlayerPosition} from "./PlayerPosition"
import {ItemPosition} from "./ItemPosition"
import {NpcPosition} from "./NpcPosition"
import {EnemyPosition} from "./EnemyPosition"

const Schema = mongoose.Schema;

const WorldSchema = new Schema({

  name: {
    type: String,
    unique: true,
    required: true,
  },

  items: {
    type: Array<typeof Item>,
    default: [],
  },

  itemPositions: {
    type: Array<typeof ItemPosition>,
    default: [],
  },

  players: {
    type: Array<typeof Player>,
    default: [],
  },

  playerPositions: {
    type: Array<typeof PlayerPosition>,

  },

  enemies: {
    type: Array<Enemy>,
  }

});

export const World = mongoose.model("World", WorldSchema);

