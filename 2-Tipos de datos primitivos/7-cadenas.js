// string (cadenas de texto)

// concatenaciones
let myName = 'Antonio';
let saludo = 'Hola ' + myName + ' !';
console.log(saludo);
console.log(typeof saludo);

// longitud de una cadena
console.log(saludo.length); // 23

// Acceso a caracteres
console.log(saludo[0]); // H
console.log(saludo[5]); // A

// Métodos comunes
console.log(saludo.toUpperCase()); // HOLA ANTONIO BIENVENIDO
console.log(saludo.toLowerCase()); // hola antonio bienvenido
console.log(saludo.indexOf('Hola')); // 0
console.log(saludo.indexOf('asdf')); // -1
console.log(saludo.includes('Hola')); // true
console.log(saludo.includes('asdf')); // false
console.log(saludo.slice(0, 7)); // Hola An
console.log(saludo.replace('Hola', 'Adios')); // Adios Antonio !
