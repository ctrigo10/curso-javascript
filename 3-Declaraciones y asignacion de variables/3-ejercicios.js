// Que muestra?
if (true) {
  var x = 5
  let y = 10
}
console.log(x) // 5
//console.log(y) // Error no esta definido

////////////////////////////////
console.log('---------------------')

const z = 15
function example() {
  let x = 10;
  console.log('z1', z)
  if (true) {
    let x = 50;
    console.log(x+x) //100
  } else {
    x = 20;
  }
  console.log('0', x) // 0
  console.log('z3', z)
  // 0
  // 50
  // 20
  // Error no se puede redaclarar
 
}
example()
console.log('z4', z)