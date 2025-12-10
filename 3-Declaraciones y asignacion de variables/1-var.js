// var

// Ámbito de función (o Global)
function exampleLetConst() {
  if (true) {
    var name = 'Carlos';
  }
  // 'nombre' Es accesible aquí pq el ámbito es la función
  console.log('1', name)
}
exampleLetConst()
//console.log('2', name) // Error: nombre no está definida (fuera de la función)

// Se puede reasignar
var ageReassign = 25;
ageReassign = 30;
console.log('ageReassign', ageReassign)

// Se puede redaclarar
var ageRedeclare = 25;
var ageRedeclare = 'Hola';
console.log('ageRedeclare', ageRedeclare)

// se puede usar hoisting 
console.log('ageHoisting', ageHoisting)
var ageHoisting = 25