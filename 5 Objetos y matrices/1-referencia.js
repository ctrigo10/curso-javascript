// Tipos de Datos de referencia
/*
En JavaScript, casi todo lo que no es un valor primitivo es un objeto.
Los objetos y los arrays son ejemplos de tipos de datos de referencia.
*/

// Diferencia Clave (Referencia vs valor)

/*
  Valor primitivo:
  Cuando copias una variable, se copia el valor
*/

const a = 10; // 10
const b = a; // 10
//console.log(a)
//console.log(b)

/*
Cuando copias una variable Objeto/Array, se copia la referencia (la dirección en memoria).
Ambas variables apuntan al mismo lugar.
*/

let original = { name: 'juan' };
let copy = original; // No se copia el objeto, se copia la referencia

copy.name = 'Pedro';

console.log(original.name); // Pedro
console.log(copy.name); // Pedro