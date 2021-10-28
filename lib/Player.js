const Potion = require('../lib/Potion');

const player = new Player('Jane');
player.getStats();
player.getInventory();

function Player(name =''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 +7);
    this.inventory = [new Potion('health'), new Potion ()];
}

module.exports = Player;
// console.log(Player);