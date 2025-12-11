// Function declaration

// Soporta hoisting
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5

// Function expression
// No soporta hoisting

const rest = function (a, b) {
  return a - b;
}
console.log(rest(5, 2)); // 3

// Arrow function
// No soporta hoisting
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

////////////////////////////////////////
// Scope dentro de funciones

let x = 10; // Variable global

function example() {
  let x = 5; // local
  console.log(x); //5
}

example()
console.log(x) //10