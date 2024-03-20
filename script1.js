let elementWidth = "50px";
const result = Number.parseInt(elementWidth); // get integer from string!

console.log("Result: " + result);
console.log(`Result:`, result);
console.log(`Result: ${result}`);

let elementHeight = "200.74px";
elHeight = Number.parseFloat(elementHeight);
console.log(`elementHeight: ${elHeight}`);

let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log(salary);
console.log(typeof salary);

// MATH
const base = 2;
const power = 5;

const resultPower = Math.pow(base, power);
console.log(resultPower);
console.log(2 ** 6);

// Example:
let baseNumber = prompt("Enter a base: ");
let powerNumber = prompt("Enter a power for your base: ");
const res = Number(baseNumber) ** Number(powerNumber);
alert(`Result is ${res}`);
