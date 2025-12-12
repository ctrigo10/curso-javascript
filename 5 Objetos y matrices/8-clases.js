// Clases

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis
let person1 = new Person('Carlos', 35, 'CarlosDev');
let person2 = new Person('Ariel', 25, 'ArielDev');

console.log(person1);
console.log(person2);
console.log(typeof person1);

// Valores por defecto
class DefaultPerson {
  constructor(name = 'Sin nombre', age = 0, alias = 'Sin alias') {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson('Carlos', 30);
console.log(person3);

// Acceso a las propiedades
console.log(person3.alias);
console.log(person3['alias']);

person3.alias = 'CarlosDev';
console.log(person3.alias);

// Funciones en clases
class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk() {
    console.log('La persona camina');
  }
}
let person4 = new PersonWithMethod('Carlos', 30, 'alias');
person4.walk();

// Propiedades privadas
class PrivatePerson {
  #bank;

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }
}
let person5 = new PrivatePerson('Carlos', 30, 'alias', '123456789');

console.log(person5.bank);
person5.bank = 'new 123456789';
console.log(person5);

// Getters y Setters
class GetSetPerson {
  #name;
  #age;
  #alias;

  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
  }

  get name() {
    return this.#name;
  }

  set age(age) {
    this.#age = age;
  }
}
let person6 = new GetSetPerson('Carlos', 30, 'alias');
console.log(person6)
console.log(person6.name)
person6.age(10)