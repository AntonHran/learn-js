// cycles!!!
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

const str = "gfchngb";
for (const i of str) {
  console.log(i);
}

for (let i = 0; i < str.length; i += 1) {
  if (str[i] !== "g") {
    console.log(str[i]);
  }
}

const min = 5;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
    console.log(i);
  }
}
console.log(total);

// cycles for lists:
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}

// massives - lists in python
// split()
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// join()
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

// indexOf()
const clients1 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients1.indexOf("Poly")); // 2
console.log(clients1.indexOf("Monkong")); // -1

// includes()
console.log(clients1.includes("Poly")); // true
console.log(clients1.includes("Monkong")); // false

// push()
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

// pop()
console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []
