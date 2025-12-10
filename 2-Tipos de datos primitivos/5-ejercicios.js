// Que imprime?
console.log('3' + 2); // "32"
console.log('3' - 2); // 1
console.log(true + true); //2
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false

// Detectar errores
let a = '10';
let b = 5;
console.log(a * b);

// Terminal (prompt)
let entrada = prompt('Introduce un número');

let number = Number(entrada);

if (isNaN(number)) {
  console.log('No es un número');
} else {
  console.log('Número valido');
}
