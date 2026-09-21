import BookCollection from './book-collection.js';

document.addEventListener('DOMContentLoaded', () => {
  const collection = new BookCollection();
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

  collection.bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = collection.titleInput.value.trim();
    const author = collection.authorInput.value.trim();

    if (title && author) {
      collection.addBook(title, author);
      collection.titleInput.value = '';
      collection.authorInput.value = '';

      showSection(listSection, navList);
    }
  });

  collection.displayBooks();
  displayDate();
});
