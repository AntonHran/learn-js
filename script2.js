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

// functions:

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}

console.log(makeOrderMessage(2, 100, 50));

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

console.log(isAdult(20));
console.log(isAdult(10));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (!password) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}

console.log(checkPassword("dsvb b"));

// тернарний оператор!
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}

console.log(checkStorage(10, 5));

// switch ... case!
function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;
  }

  return price;
}

console.log(getSubscriptionPrice("starter"));
