// cycles!!!
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

const str = "gfchngb";
for (const i of str) {
  console.log(i);
}

for (let i = 0; i < str.length; i += 1) {
  if (str[i] !== "g") {
    console.log(str[i]);
  }
}

const min = 5;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
    console.log(i);
  }
}
console.log(total);
