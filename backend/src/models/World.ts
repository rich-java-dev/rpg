import { Player } from "./Player";
import { Enemy } from "./Enemy";
import { Item } from "./Item";

export class World {
  players: Array<typeof Player> = [];
  enemies: Array<Enemy> = [];
}
