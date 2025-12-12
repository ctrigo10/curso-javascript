export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
  }
}
