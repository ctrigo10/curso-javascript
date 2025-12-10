// Conversion a números manuales y seguras

// Métodos principales
const num = Number('20'); // 20
const num2 = parseInt('20'); // 20
const num3 = parseFloat('20.5'); // 20.5

// Casos importantes
const num4 = Number('20a'); // NaN
const num5 = parseInt('20a'); // 20
const num6 = parseFloat('20.5a'); // 20.5

// Number() exige exactitud
// parseInt() y parseFloat() extraen lo que pueden

// Convserión a cadena
const str = String(123); // "123"
const str2 = (123).toString(); // "123"
const str3 = true.toString(); // "true"

console.log('num', num);
console.log('num2', num2);
console.log('num3', num3);
console.log('num4', num4);
console.log('num5', num5);
console.log('num6', num6);

console.log('str', str);
console.log('str2', str2);
console.log('str3', str3);
