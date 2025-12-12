// map

// Declaración

let myMap = new Map();

console.log(myMap);

// Inicialización

myMap = new Map([
  ['name', 'Carlos'],
  ['email', 'carlos@gmail.com'],
  ['age', 37],
]);

console.log(myMap);

// set
myMap.set('alias', 'carlosdev');
myMap.set('name', 'Ariel');
console.log(myMap);

// get
console.log(myMap.get('name'));

// has
console.log(myMap.has('name'));
console.log(myMap.has('name1'));

// delete
myMap.delete('email');
console.log(myMap);

// keys, values y entries
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// size
console.log(myMap.size);

// limpiar
myMap.clear();
console.log(myMap);