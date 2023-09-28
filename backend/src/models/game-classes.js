"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Enemy = exports.Player = exports.World = void 0;
class World {
    constructor() {
        this.players = [];
    }
}
exports.World = World;
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
        this.hp = 0;
        this.mp = 0;
        this.posX = 0;
        this.poxY = 0;
        this.inventory = [];
    }
}
exports.Player = Player;
class Enemy {
}
exports.Enemy = Enemy;
class Item {
}
exports.Item = Item;
