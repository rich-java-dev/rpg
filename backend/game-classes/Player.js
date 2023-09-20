"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        this.id = "";
        this.name = "";
        this.maxHp = 100;
        this.maxMp = 100;
        this.level = 1;
        this.strength = 10;
        this.wisdom = 10;
        this.dexterity = 10;
        this.hp = this.maxHp;
        this.mp = this.maxMp;
        this.posX = 0;
        this.poxY = 0;
        this.inventory = [];
        this.toJSON = () => {
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
}
exports.Player = Player;
