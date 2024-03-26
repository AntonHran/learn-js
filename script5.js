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
