class Book {
  constructor(title, author) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
  }
}

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

  init() {
    this.bookForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this.titleInput.value.trim();
      const author = this.authorInput.value.trim();

      if (title && author) {
        this.addBook(title, author);
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    });

    this.displayBooks();
  }
}

const app = new BookCollection();
app.init();