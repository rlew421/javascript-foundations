class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hunger = 0;
    this.hungry = true;
  }

  eat() {
    this.hunger ++;
    this.hunger < 3 ? this.hungry = true : this.hungry = false;
  }
}

module.exports = Dragon;
