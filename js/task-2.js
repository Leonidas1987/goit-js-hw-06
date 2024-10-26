// Задача 2. Склад
class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  // отримання всіх товарів
  getItems() {
    return this.#items;
  }
  // додавання нового товару
  addItem(newItem) {
    this.#items.push(newItem);
  }
  // видалення товару за його назвою
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems()); 