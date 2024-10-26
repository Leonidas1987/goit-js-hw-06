// Задача 3. Конструктор рядків
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // отримання поточного значення
  getValue() {
    return this.#value;
  }

  // додавання рядка в кінець
  padEnd(str) {
    this.#value += str;
  }

  // додавання рядка на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // додавання рядка на початок і в кінець
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); 
builder.padStart("^");
console.log(builder.getValue()); 
builder.padEnd("^");
console.log(builder.getValue()); 
builder.padBoth("=");
console.log(builder.getValue()); 