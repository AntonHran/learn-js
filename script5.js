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
  name: "Jacques Gluke",
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

const userName = user["name"];
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
