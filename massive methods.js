// callback function

function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// higher order function
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// several callbacks
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage);

// calback abstraction
function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

////////////////////////////////////////////////////////////////////////////

// forEach()
// массив.forEach(function callback(element, index, array) {
// Тіло колбек-функції
// });
// return nothing

const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (order, index) {
    totalPrice += order;
  });

  return totalPrice;
}

// arrow function
// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// with one parameter:
const add = (a) => {
  return a + 5;
};

// without parameters:
const greet1 = () => {
  console.log("Привіт!");
};

// with rest:
const add1 = (...args) => {
  console.log(args);
};

add1(1, 2, 3); // [1, 2, 3]

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

// map
// массив.map((element, index, array) => {
// Тіло колбек-функції
// });
// return new massive

const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// Оригінальний масив не змінився
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// tests
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

// filter
// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

// Оригінальний масив не змінився
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

const studentsCourses = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = studentsCourses.flatMap((student) => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueCourses);

// find
// масив.find((element, index, array) => {
// Тіло колбек-функції
// });
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined

// findIndex
// масив.findIndex((element, index, array) => {
// Тіло колбек-функції
// });

colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
colorPickerOptions.findIndex((option) => option.label === "white"); // -1

// every
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// some
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

//
// reduce
// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

//
// sort
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// массив.sort((a, b) => {
// Тіло колбек-функції
// });

const ascendingScores1 = [...scores].sort((a, b) => a - b);
console.log(ascendingScores1); // [19, 35, 56, 61, 74, 92]

//
// tests
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}

// const orderedItems = [1, 2, 3];
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

console.log(calculateTotalPrice);
