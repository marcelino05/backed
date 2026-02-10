class Animal {
  constructor(name) {
    this.name = name
  }

  noise() {
    console.log(`The ${this.name} mande some noise!`)
  }
}

class Insect extends Animal {
  noise() {
    console.log(`The ${this.name} mande a noise!`)
  }
}

module.exports = {
  Animal,
  Insect
}