const bthAdd = document.querySelector("button[data-add]");
const btnReset = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");
const outputValue = document.querySelector(".js-output span");

let total = 0;

bthAdd.addEventListener("click", function () {
  const value = Number(valueInput.value);
  total += value;
  outputValue.textContent = total;
  valueInput.value = "";
});

btnReset.addEventListener("click", function () {
  total = 0;
  outputValue.textContent = total;
});
