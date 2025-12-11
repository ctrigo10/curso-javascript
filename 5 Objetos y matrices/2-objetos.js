// Objetos en JavaScript
// Un objeto es una colección de propiedades (clave-valor)

// 1. Ejemplo básico
const person = {
  name: 'Pedro',
  age: 35,
  isStudent: true
}
console.log(person.name);
console.log(person['age']);

// 2. Modificar y agregar propiedades
person.age = 31; // modificar
person.lastName = 'Reyes'; // agregar 
delete person.isStudent; // eliminar
console.log('person', person)

// 3. Objetos anidados 
const person2 = {
  name: 'Carlos',
  address: {
    city: 'Potosí',
    country: 'Bolivia'
  }
}

console.log(person2.address.city)

// 4. Métodos (funciones)
let person3 = {
  name: 'Julio',
  age: 37,
  alias: 'July',
  walk: function () {
    console.log('La persona camina')
  }
}
person3.walk()

// 5. Funciones como objetos

function Person(name, age) {
  // Debería ser una clase
  this.name = name;
  this.age = age
}

let person5 = new Person('Vidal', 37);
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person)