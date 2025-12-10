// Tipo de datos primitivos

// String
let myName = 'Carlos Trigo';

// Number
let age = 25; // Entero
let height = 1.75; // Decimal

// Boolean
let isStudent = true;
let isTeacher = false;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Symbol
let symbolVar = Symbol('adsf');

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt(1234567890123456789012345678901234567890);

// NaN (Not a Number)
let myNaN = 'hola' * 3;

// Mostramos los tipos de datos
console.log(undefinedVar); // undefined
console.log(typeof myName); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof undefinedVar); // undefined
console.log(typeof nullVar); // object //Atención un null es un objeto
console.log(typeof symbolVar); // symbol
console.log(typeof bigInt); // bigint
console.log(typeof myNaN); // number
console.log(myNaN); // NaN
