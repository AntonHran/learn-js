const someString = "skbnc  k ckssn szkhkdjsbn.";
console.log(someString.length);

// string concatination
const firstName = "Steven";
const lastName = "Smith";

const fullName = firstName + " " + lastName;
console.log(fullName);

let brand = "SamSung";
brand = brand.toLowerCase();
console.log(brand);

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 = "Hi there! I am prince Ali, wait, hold on this is not a spam!";
const string2 = "It is the biggest SALE of the week!";

console.log(string1.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord1));

console.log(string1.includes(blacklistedWord2));
console.log(string2.includes(blacklistedWord2));
