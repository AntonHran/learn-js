const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const ulEl = document.querySelector("ul");
console.log(ulEl);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const notExistSelector = document.querySelector(".itemdvfgb");
console.log(notExistSelector);

const selectThroughEl = ulEl.querySelector(".menu-item");
console.log(selectThroughEl);

const selectThroughElAll = ulEl.querySelectorAll(".menu-item");
console.log(selectThroughElAll);
