const message = "NodeJS is amazing!";
console.log(message);

const sum = (a, b) => a + b;
sum(2, 3);

class Hero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const h = new Hero("mango");
console.log(h);

console.log(h._name);
