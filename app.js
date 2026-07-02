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

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }
});
displayBooks();