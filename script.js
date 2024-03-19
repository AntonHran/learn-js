"use strict";

const age = 10;
const totalPrice = 200.75;
const userName = "Chelsy";
// const message = "Welcome back!";
const isOpen = true;

const type = typeof userName;
console.log(type);

const message = "Do you want to extend your subscription?";
const shouldExtend = confirm(message);
console.log(shouldExtend);

let quantity = prompt("Enter your number");
try {
  quantityChanged = Number(quantity);
  console.log(typeof quantityChanged);
} catch (TypeError) {
  console.log("wrong type");
}
