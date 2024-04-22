const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
  console.log("Event target", event.target);
  console.log("Parent click handler");
});

child.addEventListener("click", (event) => {
  console.log("Event target", event.target);
  console.log("Child click handler");
});

descendant.addEventListener("click", (event) => {
  console.log("Event target", event.target);
  console.log("Descendant click handler");
});
