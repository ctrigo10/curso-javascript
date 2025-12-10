// Operadores Arítmeticos
let a = 5;
let b = 10;

// Incremento
a++;
console.log('Incremento', a);

// Decremento
a--;
console.log('Decremento', a);

// Operadores de asignación
let myVariable = 2;
console.log('myVariable', myVariable);
myVariable += 2; // suna con asignación
console.log('myVariable', myVariable);

myVariable -= 2; // resta con asignación
myVariable *= 2; // multiplicación con asignación
myVariable /= 2; // división con asignación
myVariable %= 2; // módulo con asignación
myVariable **= 2; // potencia con asignación

// Operadore de comparación
console.log(a == b); // igualdad
console.log(a != b); // desigualdad
console.log(a === b); // igualdad estricta
console.log(a !== b); // desigualdad estricta

// and (&&)
console.log(5 > 10 && 5 < 10); // false

// or (||)
console.log(5 > 10 || 5 < 10); // true

// not (!)
console.log(!true); // false
console.log(!false); // true

// Operadores ternarios
const isRaining = false;

isRaining ? console.log('Lleva paraguas') : console.log('No lleva paraguas');

if (isRaining) {
  console.log('Lleva paraguas');
} else {
  console.log('No lleva paraguas');
}
