// elements

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

// properties of elements
const imageEl = document.querySelector(".hero_image");
console.log(imageEl);
console.log(imageEl.src);
imageEl.src = "/images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash (1).jpg";
imageEl.alt = "It's me)";

const heroTitleEl = document.querySelector(".hero_title");
console.log(heroTitleEl);
const textHeroTitleEl = heroTitleEl.textContent;
console.log(textHeroTitleEl);

// interface
console.log(imageEl.getAttribute("src")); // that is equal to
console.log(imageEl.src);

console.log(imageEl.hasAttribute("alt"));
console.log(imageEl.hasAttribute("khkbk"));
