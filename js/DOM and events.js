import products from "../data/products.js";
import transactions from "../data/transactions.js";

//console.log(products);

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

// elements creation
const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "this is header";
console.log(titleEl);

const imageElem = document.createElement("img");
imageElem.src = "/images/brecht-corbeel-qHx3w6Gwz9k-unsplash.jpg";
imageElem.alt = "python";
imageElem.width = 350;
console.log(imageElem);
document.body.appendChild(imageElem);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");
const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Private Cabinet";
navLinkEl.href = "/profile";
console.log(navLinkEl);
navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

navElNav.appendChild(navItemEl);
navElNav.insertBefore(navItemEl, navElNav.firstElementChild);

const heroEl = document.querySelector(".hero");
heroEl.append(titleEl, imageEl);

// elements collection
const ColorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = ColorPickerOptions.map((element) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = element.label;
//   buttonEl.style.backgroundColor = element.color;
//   return buttonEl;
// });

const makeColorPickerOptions = (options) => {
  return options.map((element) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__option");
    buttonEl.textContent = element.label;
    buttonEl.style.backgroundColor = element.color;
    return buttonEl;
  });
};

const elements = makeColorPickerOptions(ColorPickerOptions);
colorPickerContainerEl.append(...elements);

// example

// const product = { --> for one element!
//   name: "Servodrive",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit qui voluptatum iste necessitatibus alias architecto aliquid fugiat quia. Debitis?",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

//what we want to get as a result:
/*
<article class="product">
    <h2 class="product__name">Name</h2>
    <p class="product__descr">Description</p>
    <p product__price>Price: 1111 credits</p>
</article>
*/

const productContainerEl = document.querySelector(".js-product");

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameElEx = document.createElement("h2");
  nameElEx.textContent = name;
  nameElEx.classList.add("product__name");

  const descrElEx = document.createElement("p");
  descrElEx.textContent = description;
  descrElEx.classList.add("product__descr");

  const priceElEx = document.createElement("p");
  priceElEx.textContent = `Price: ${price} credits`;
  priceElEx.classList.add("product__price");

  productEl.append(nameElEx, descrElEx, priceElEx);
  return productEl;
};

// const addNewEl = makeProductCard(products[1]); --> for creating one element from object products!
// console.log(addNewEl);

const elementsFromObject = products.map(makeProductCard);
productContainerEl.append(...elementsFromObject);

// innerHTML
const titleEl1 = document.querySelector(".title");
titleEl1.innerHTML = "<a href=''>This is a header)</a>";
titleEl1.insertAdjacentHTML("beforeend", "<a href=''>This is a link)</a>");
titleEl1.insertAdjacentHTML("afterbegin", "<a href=''>This is a new link)</a>");

// innerHTML example
const makeTransactionTableRowMarkup = (transaction) => {
  const { id, amount, date, businnes, type, account, name } = transaction;
  return `<tr>
      <td>${id}</td>
      <td>${amount}</td>
      <td>${date}</td>
      <td>${businnes}</td>
      <td>${type}</td>
      <td>${name}</td>
      <td>${account}</td>
    </tr>`;
};

const tableEl = document.querySelector(".js-transaction-table");
console.log(transactions);
const makeTransactionTableRow = transactions
  .map(makeTransactionTableRowMarkup)
  .join();
console.log(makeTransactionTableRow);

tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRow);

//
// EVENTS
//
const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);
