// Spread y Destructuring

const person = { firstName: 'Carlos', age: 35 };

// 1. Destructuring de objetos
const { firstName, age } = person;
console.log(firstName, age);

// 2. Destructuring de arrays
const [a, b] = [1, 2];
console.log(a, b);

// 3. Spread operator
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers);