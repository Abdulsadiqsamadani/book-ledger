import Book from './book.js';

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.booksContainer = document.getElementById('booksContainer');
    this.bookForm = document.getElementById('bookForm');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');
  }

  updateStorageAndUI() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.updateStorageAndUI();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.updateStorageAndUI();
  }

  displayBooks() {
    this.booksContainer.innerHTML = '';

    if (this.books.length === 0) {
      this.booksContainer.innerHTML = '<p class="empty-state">No books in your collection yet.</p>';
      return;
    }

    this.books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-item';

      const infoDiv = document.createElement('div');
      infoDiv.innerHTML = `"${book.title}" by <span>${book.author}</span>`;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = 'Remove';

      removeBtn.addEventListener('click', () => this.removeBook(book.id));

      bookDiv.appendChild(infoDiv);
      bookDiv.appendChild(removeBtn);
      this.booksContainer.appendChild(bookDiv);
    });
  }
}

export default BookCollection;
