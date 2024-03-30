// objects - dictionaries
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};
console.log(book);

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book);

// new example
const user = {
  name_: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location1 = user.location;
console.log(location1); // Об'єкт location

const country = user.location.country;
console.log(country); // 'Jamaica'
console.log(location1.city);

const userName = user["name_"];
console.log(userName);

// shorthand properties
const name = "Генрі Сибола";
const age = 25;

const user1 = {
  name: name,
  age: age,
};

console.log(user1); // old version!!!

// new version
const userNew = {
  name,
  age,
};

// computed properties
const propName = "name";
const user3 = {
  age: 25,
  // Ім'я цієї властивості буде взяте зі значення змінної propName
  [propName]: "Генрі Сибола",
};

console.log(user3.name); // 'Генрі Сибола'

// object methods!!!
// ✅ Логічно і синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
    return this.books;
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log("Цей метод буде додавати нову книгу у властивість books");
    this.books.push(bookName);
  },
};

// Виклики методів
const res = bookShelf.getBooks();
console.log(res);
bookShelf.addBook("Нова книга");
console.log(bookShelf);

// for ... in
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// hasOwnProperty()
for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

// ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

// Object.keys()
const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book1);
console.log(keys); // ['title', 'author', 'genres', 'rating']

for (const key of keys) {
  console.log(key);
  console.log(book1[key]);
}

// Object.values()
const values = Object.values(book);
console.log(values);

// Object.entires()
const entries = Object.entries(book);
console.log(entries);

// massive of objects
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames);

// ...spread
const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

// rest
function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// pattern object of parameters
function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// test examples:
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);
  console.log(keys);
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
  // Change code above this line
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   let res = [];
//   for (const obj of products) {
//     if (obj[propName]) {
//       res.push(obj[propName]);
//     }
//   }
//   return res;
// }

function getAllPropValues(propName) {
  let res = [];
  for (const obj of products) {
    obj[propName] ? res.push(obj[propName]) : res;
  }
  return res;
}

// function getAllPropValues(propName) {
//   let res = [];
//   const keys = Object.keys(products[0]);
//   if (keys.includes(propName)) {
//     for (const obj of products) {
//       res.push(obj[propName]);
//     }
//   } else {
//     return res;
//   }
//   return res;
// }

// function getAllPropValues(propName) {
//   let res = [];
//   const keys = Object.keys(products[0]);
//   if (!keys.includes(propName)) {
//   return res;}
//   } else {
//     for (const obj of products) {
//       res.push(obj[propName]);
//   }
//   return res;
// }

console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("category"));

// rest

function add(...args) {
  let total = 0;
  for (const el of args) {
    total += el;
  }
  return total;
}

console.log(add(1, 2, 3));

//functions:

const bookShelf1 = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
    console.log(this.getBooks());
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    delete this.books[this.books.indexOf(bookName)];
    console.log(this.getBooks());
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

console.log(bookShelf1.addBook("Red sunset"));
console.log(bookShelf1.removeBook("Red sunset"));
