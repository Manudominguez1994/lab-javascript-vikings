// Soldier
class Soldier {
  constructor(vida, fuerza) {
    this.health = vida;
    this.strength = fuerza;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking

class Viking extends Soldier {
  constructor(nombre, vida, fuerza) {
    super(vida, fuerza);
    this.name = nombre;
  }
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }   

    addViking = (viking) => {
        this.vikingArmy.push(viking)
    };

    addSaxon = (saxon) => {
        this.saxonArmy.push(saxon)
    };
    vikingAttack = () => {
        Saxon.receiveDamage() = Viking.fuerza
    };
    saxonAttack = () => {};
    showStatus = () => {};
  
}
