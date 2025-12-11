// Iterar arrays y objetos

// 1 Arrays
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

numbers.forEach((num) => console.log(num));

// 2 Objetos
const person = { name: 'Carlos', age: 35 };

for (let key in person) {
  console.log(key, person[key])
}

Object.entries(person).forEach(([key, value]) => console.log(key, value))