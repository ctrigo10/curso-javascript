// Set 
// Declara 

let mySet = new Set()
console.log(mySet)

// Inicializa
mySet = new Set(['Carlos', 'Trigo', 'ctrigo', 37, true, 'carlos@gmail.com'])
console.log(mySet)

// Métodos comunes
// add y delete 
mySet.add('http://carlosdev.com')

mySet.add('carlos@gmail.com')
mySet.add('carlos@gmail.com')
mySet.add('carlos@gmail.com')
mySet.add('carlos@gmail.com')

mySet.delete('carlos@gmail.com')

console.log(mySet)
// has
console.log(mySet.has('Ariel'))
console.log(mySet.has('Carlos'))

// size
console.log(mySet.size)

// Convertir un set a un array
let myArray = Array.from(mySet);
console.log(myArray)

// Convertir un array a set
const myArray2 = ['a', 'a', 'b', 'c']
mySet = new Set(myArray2)
console.log(mySet)