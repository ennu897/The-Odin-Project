document.addEventListener("DOMContentLoaded", () => {
  const openForm = document.getElementById('open-form');
  const closeForm = document.getElementById('close-form');
  const mainContainer = document.getElementById('main-container');

  openForm.addEventListener('click', () => {
    mainContainer.style.display = "flex";
  });

  closeForm.addEventListener('click', () => {
    mainContainer.style.display = "none";
  });
});

const myLib = [];
let editingIndex = null; // <-- global editing index

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLib.push(newBook);
  displayBooks();
}

function displayBooks() {
  const mainDiv = document.getElementById('book-details-container');
  mainDiv.innerHTML = '';

  myLib.forEach((book, index) => {
    const div = document.createElement('div');
    div.classList.add('book-details');
    div.dataset.index = index;
    div.innerHTML = `
      <p>Title: <span>${book.title}</span></p>
      <p>Author: <span>${book.author}</span></p>
      <p>Pages: <span>${book.pages}</span></p>
      <p>Read: <span>${book.read}</span></p>
      <button type="button" class="edit">edit</button>
      <button type="button" class="remove">remove</button>
    `;
    mainDiv.appendChild(div);
  });
}

// Event delegation for remove/edit
const mainDiv = document.getElementById('book-details-container');
mainDiv.addEventListener('click', (e) => {
  const bookDiv = e.target.closest('.book-details');
  if (!bookDiv) return;

  const index = bookDiv.dataset.index;

  if (e.target.classList.contains('remove')) {
    myLib.splice(index, 1);
    displayBooks();
  }

  if (e.target.classList.contains('edit')) {
    editingIndex = index; // set global editing index

    const book = myLib[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('pages').value = book.pages;
    document.getElementById('read').checked = book.read === 'yes';

    document.getElementById('main-container').style.display = 'flex';
  }
});

// Submit handler
const submit = document.getElementById('submit');

if (submit) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked ? 'yes' : 'no';

    if (editingIndex !== null) {
      // Edit existing book
      myLib[editingIndex].title = title;
      myLib[editingIndex].author = author;
      myLib[editingIndex].pages = pages;
      myLib[editingIndex].read = read;
      editingIndex = null; // reset
    } else {
      // Create new book
      createBook(title, author, pages, read);
    }

    displayBooks();
    e.target.closest('form').reset();
    document.getElementById('main-container').style.display = 'none';
  });
}