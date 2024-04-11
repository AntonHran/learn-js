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

// data-attributes
const actions = document.querySelectorAll(".js-actions button");
console.log(actions);

console.log(actions[0]);
console.log(actions[0].dataset);
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);

console.log(actions[1].getAttribute("data-action"));

// classList elements
const navEl = document.querySelector(".menu");
console.log(navEl);
console.log(navEl.classList);
navEl.classList.add("super-class"); // adding new class
navEl.classList.remove("super-class");
navEl.classList.toggle("superb"); // if not exist - add, if exist - delete
navEl.classList.replace("superb", "qwerty");
console.log(navEl.classList.contains("qwerty"));

const currentEl = "/home";
const linkEl = document.querySelector(`.site-nav__link[href="${currentEl}"]`);
linkEl.classList.add("menu-link__new");

// navigation on DOM elements
const navElNav = document.querySelector(".site-nav");
const firstNavEl = navElNav.firstElementChild;
console.log(firstNavEl);
console.log(navElNav.children);
console.log(navElNav.lastElementChild);
