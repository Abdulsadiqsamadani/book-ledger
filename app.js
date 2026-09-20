/* eslint-disable no-use-before-define */
document.addEventListener('DOMContentLoaded', () => {
  let bookCollection = JSON.parse(localStorage.getItem('books')) || [];

  const booksContainer = document.getElementById('booksContainer');
  const bookForm = document.getElementById('bookForm');
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');

  function displayBooks() {
    booksContainer.innerHTML = '';

    if (bookCollection.length === 0) {
      booksContainer.innerHTML = '<p class="empty-state">No books in your collection yet.</p>';
      return;
    }

    bookCollection.forEach((book) => {
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

      removeBtn.addEventListener('click', () => removeBook(book.id));

      bookDiv.appendChild(infoDiv);
      bookDiv.appendChild(removeBtn);
      booksContainer.appendChild(bookDiv);
    });
  }

  function addBook(title, author) {
    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    bookCollection.push(newBook);
    updateStorageAndUI();
  }

  function removeBook(id) {
    bookCollection = bookCollection.filter((book) => book.id !== id);
    updateStorageAndUI();
  }

  function updateStorageAndUI() {
    localStorage.setItem('books', JSON.stringify(bookCollection));
    displayBooks();
  }

  const navList = document.getElementById('nav-list');
  const navAdd = document.getElementById('nav-add');
  const navContact = document.getElementById('nav-contact');

  const listSection = document.getElementById('listSection');
  const addSection = document.getElementById('addSection');
  const contactSection = document.getElementById('contactSection');

  const navLinks = [navList, navAdd, navContact];

  const showSection = (targetSection, activeLink) => {
    listSection.classList.add('hidden');
    addSection.classList.add('hidden');
    contactSection.classList.add('hidden');

    navLinks.forEach((link) => link.classList.remove('active'));

    targetSection.classList.remove('hidden');
    activeLink.classList.add('active');
  };

  navList.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(listSection, navList);
  });

  navAdd.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(addSection, navAdd);
  });

  navContact.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(contactSection, navContact);
  });
  const displayDate = () => {
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
      const now = new Date();
      dateDisplay.textContent = now.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    }
  };

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
      addBook(title, author);
      titleInput.value = '';
      authorInput.value = '';

      showSection(listSection, navList);
    }
  });

  displayBooks();
  displayDate();
});
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
