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
