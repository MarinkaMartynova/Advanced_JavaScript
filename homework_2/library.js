"use strict";

class LibraryManager {
  #books;

  constructor(initialBooks = []) {
    const bookSet = new Set(initialBooks);
    if (bookSet.size !== initialBooks.length) {
      throw new Error("В списке есть дубликаты.");
    }
    this.#books = initialBooks;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже существует в списке.");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error("Книги с таким названием нет в списке.");
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования
const library = new LibraryManager(["Чипполино", "Чудной доктор"]);
console.log(library.allBooks); // ["Чипполино", "Чудной доктор"]
library.addBook("Преступление и наказание");
console.log(library.allBooks); // ["Чипполино", "Чудной доктор", "Преступление и наказание"]
library.removeBook("Чипполино");
console.log(library.allBooks); // ["Чудной доктор", "Преступление и наказание"]
console.log(library.hasBook("Чудной доктор")); // true
console.log(library.hasBook("Чипполино")); // false
