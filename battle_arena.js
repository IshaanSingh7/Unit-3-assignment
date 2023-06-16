//Class
class Character{
    constructor(name, strength, health, defense){
        this.name = name;
        this.strength = strength;
        this.health = health;
        this.defense = defense;
    }

    //Method
    takeDamage(damage){
        let damageTaken = damage - this.defense;
        this.health = this.health - damageTaken
        return damageTaken;
    }
    attack(target){
        let dexterity = 20;
        let criticalHit = Math.floor(Math.random()*10) < dexterity;
        let damage = this.strength*2;
        if(criticalHit){
            damage = damage*2;
            console.log("*** Critical Hit ***");
        }
        let damageDealt = target.takeDamage(damage);
        return damageDealt
    }
    isAlive(){
        return this.health > 0;
    }
}
//Extending class of character
class Rogue extends Character {
    constructor(){
        super();
        this.name = "Latte";
        this.strength = 8;
        this.health = 100;
        this.defense = 4;
    }
}


//Class object

let player1 = new Character("Cheetah", 10, 100, 2);

console.log(player1);

let player2 = new Rogue();
console.log(player2);

console.log(player1.name + " vs. " + player2.name)
console.log(player1.health + " vs. " + player2.health)

while(player1.isAlive() && player2.isAlive()){
    console.log(player1.name + ": " + player1.health);
    console.log(player2.name + ": " + player2.health);
    let damage;


    damage = player1.attack(player2);
    console.log(player1.name + " hits " + player2.name + " for " + damage);

    damage = player2.attack(player1);
    console.log(player2.name + " hits " + player1.name + " for " + damage);
}

if (player1.isAlive()){
    console.log(player1.name + " wins!");
} else if(player2.isAlive()){
    console.log(player2.name + " wins!");
} else{
    console.log("It's a draw!")
}