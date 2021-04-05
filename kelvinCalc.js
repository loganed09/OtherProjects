
// Kelvin degrees
const kelvin = 300;

//Celcius
var celcius = kelvin - 273;

//Fahrenheit that is rounded down 
var fahrenheit = Math.floor(celcius * (9/5) + 32);

//Newton Scale
var newton = Math.floor(celcius *(33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celcius} degrees Celcius.`);
console.log(`The temperature is ${newton} degrees Newton.`);
