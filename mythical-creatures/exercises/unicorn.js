class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    } else {
      return true;
    }
  }

  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn;
