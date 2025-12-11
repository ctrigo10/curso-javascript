// Parámetros, arguemntos y return
// 1. Parámetros: Nombre declaradas en la función
// 2. Argumentos: valores pasados al llamar la función

function saludar(nombre) {
  console.log('Hola ' + nombre);
}

saludar('Carlos');

// valores por defecto
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5))

// 3. Return: termina la ejecución de la función
function sum(a, b) {
  return a + b;
}
let result = sum(2, 3);
console.log(result) // 5

// sin return
function nothing() {}
console.log(nothing()); // undefined

// -----------------------------------
// Closures 
// Un closure ocurre cuando una función recuerda variables de su scope
// incluso después de ejecutarse

function createCounter() {
  let count = 0;
  return function () {
    count ++;
    return count
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count está "protegido" dentro de la función interna