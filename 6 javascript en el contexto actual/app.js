// Importar espécificos
import {PI, sum} from './utils.js'

console.log(sum(10, PI))

// importar y renombrar
import {PI as pi, sum as sumar} from './utils.js'
console.log(sumar(10, pi))

// importar todo
import * as utils from './utils.js'
console.log(utils.sum(10, utils.PI))

////////////////////////////////////////////
// Importar por defecto
import Person from './class-person.js'

const person1 = new Person('Carlos', 30)
person1.saludar()

// Importar con otro nombre
import Person2 from './class-person.js'

const person2 = new Person2('Ariel', 10)
person2.saludar()