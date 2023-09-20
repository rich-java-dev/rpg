import { Item } from "./Item";

export class Player {
  id: String = "";
  name: String = "";

  maxHp: number = 100;
  maxMp: number = 100;

  level: number = 1;
  strength: number = 10;
  wisdom: number = 10;
  dexterity: number = 10;

  hp: number = this.maxHp;
  mp: number = this.maxMp;

  posX: number = 0;
  poxY: number = 0;

  inventory: Array<Item> = [];

  toJSON = () => {
    return {
      id: this.id,
      name: this.name,
      maxHp: this.maxHp,
      maxMp: this.maxMp,
      level: this.level,
      str: this.strength,
      wis: this.wisdom,
      dex: this.dexterity,
      hp: this.hp,
      mp: this.mp,
      inventory: this.inventory,
    };
  };
}
