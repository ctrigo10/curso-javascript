// Arrays (Matrices)
/*
Los arrays son listas "ordenadas" de valores
Se indexan numéricamente, comenzando desde el indice 0
*/

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Métodos comunes
const fruits = ['apple', 'banana'];

fruits.push('orange'); // agrega al final
console.log('push', fruits);
fruits.pop(); // eliminar del final
console.log('pop', fruits);
fruits.unshift('pear'); // agrega al inicio
console.log('unshift', fruits);
fruits.shift(); // Elimina del inicio
console.log('shift', fruits);
fruits.splice(0, 2); // Elimina posicion y cantidad
console.log('splice', fruits);

// Método inmutables (devuelven un nuevo array)
const countries = ['Bolivia', 'Peru', 'Uruguay'];

// 1. slice: crea una copia
const copyCountries = countries.slice(1, 3);
console.log('slice', copyCountries);

// 2. concat: unir arrays
const countries2 = ['Chile', 'Argentina'];
const countriesUnited = countries.concat(countries2);
console.log('concat', countriesUnited);

// 3. map: Crea un nuevo array aplicando una funcion a cada elemento
const numbersDoubled = numbers.map((num) => num * 2);
console.log('numbersDoubled', numbersDoubled);

// 4. filter: Crea un nuevo array con elemetos que cumplan una condifici'on
const numberEvent = numbers.filter((num) => num % 2 === 0);
console.log('numberEvent', numberEvent);

////////////////////////
// funciones no tan comunes
// find: Buscar el primer elemento que cumpla una condici'on
const numberFound = numbers.find((num) => num === 3);
console.log('numberFound', numberFound);

// findindex: Busca el indice del primer elemento que cumpla una condicion
const numberIndex = numbers.findIndex((num) => num === 3);
console.log('numberIndex', numberIndex);
// every: Busca si todos los elementos cumplen la condicion
const allEven = numbers.every((num) => num % 2 === 0);
console.log('allEven', allEven);
// some: Busca si al menos un elemento cumple la condicion
const someEven = numbers.some((num) => num % 2 === 0);
console.log('someEven', someEven);
// reduce: Reduce el array a un solo valor
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('sum', sum);

// sort: Ordena el array
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log('sortedNumbers', sortedNumbers);

// reverse: Invierte el orden del array
const reversedNumbers = numbers.reverse();
console.log('reversedNumbers', reversedNumbers);

// join: Une los elementos del array en una cadena
const joinedNumbers = numbers.join(', ');
console.log('joinedNumbers', joinedNumbers);

// includes: Busca si un elemento existe en el array
const includesNumber = numbers.includes(3);
console.log('includesNumber', includesNumber);

// flat: Aplana un array
const arrayAnidado = [1, 2, [3, 4], [5, 6]];
const flatArray = arrayAnidado.flat();
console.log('flatArray', flatArray);

// flatMap: Aplana un array y aplica una funcion a cada elemento
const flatMapArray = arrayAnidado.flatMap((num) => num * 2);
console.log('flatMapArray', flatMapArray);
