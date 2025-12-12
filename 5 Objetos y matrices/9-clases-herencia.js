// Herencia

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('El animal emite un sonido genérico');
  }
}

class Dog extends Animal {
  sound() {
    console.log('GUAU');
  }
  run() {
    console.log('El perro corre');
  }
}
let myDog = new Dog('Perro');
myDog.sound();
myDog.run();
console.log(myDog.name);

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  swim() {
    console.log('El pez nada');
  }
}
let myFish = new Fish('Pescado', 10);
console.log(myFish.name);
myFish.swim();
myFish.sound();

// Métodos estáticos
class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(5, 8));
