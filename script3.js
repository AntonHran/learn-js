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

// slice()
const clients2 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients2.slice(1, 3)); // ["Ajax", "Poly"]
console.log(clients2.slice(2)); // ["Poly", "Kiwi"]
console.log(clients2.slice(-2)); // ["Poly", "Kiwi"]

// splice()
const scores = [1, 2, 3, 4, 5];
// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);
// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]
// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]

const colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, "yellow", "pink");
console.log(colors);

const languages = ["C", "C++", "Java", "JavaScript"];
// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
