// Errores comunes


// 1. Llamar a una función andres de declararla (cuando es expresión)
//sum1(2, 3);
const sum1 = function (a, b) {
  return a + b;
};

function sum2(a, b) {
  a + b;
}
console.log(sum2(2, 3)) //undefined