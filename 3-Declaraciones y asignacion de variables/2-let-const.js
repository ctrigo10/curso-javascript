// let y const
// Ámbito de Bloque ({})
function example() {
  if (true) {
    let lastName = 'Trigo';
    const age = 30;
    console.log(lastName, age) // Trigo 30
  }
  // 'nombre' Es accesible aquí pq el ámbito es la función
  //console.log('1', lastName)
}
example()

// Se puede reasignar
// Solo let
let apellido = 'Vargas';
apellido = 'Copa'
console.log(apellido)

// No const
const edad = 30;
//edad = 31;
//console.log(edad)

// No se puede redeclarar
// let apellido = 'asdf'

// Hoisting 
// No se puede usar hoisting 
//console.log(constHoisting)
//const constHoisting = 25

//console.log(lettHoisting)
//let lettHoisting = 25