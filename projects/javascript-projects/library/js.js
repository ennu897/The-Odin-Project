
document.addEventListener("DOMContentLoaded", () => {
  const openForm= document.getElementById('open-form');
  const closeForm = document.getElementById('close-form');
  const mainContainer = document.getElementById('main-container');

  openForm.addEventListener('click', () => {
    mainContainer.style.display= "flex";
  });

  closeForm.addEventListener('click', () => {
    mainContainer.style.display = "none";
  });
});

const myLib = [];

function Book(title, author, pages, read){
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function createBook(title, author, pages, read){
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
    div.dataset.index = index; // store index for remove/edit
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
    if (index !== undefined) myLib.splice(index, 1); // remove from array
    bookDiv.remove(); // remove from DOM
  }

  if (e.target.classList.contains('edit')) {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    if (index !== undefined) {
      const book = myLib[index];
      titleInput.value = book.title;
      authorInput.value = book.author;
      pagesInput.value = book.pages;
      readInput.checked = book.read === 'yes';
    }

    document.getElementById('main-container').style.display = 'flex';
  }
});


const submit = document.getElementById('submit');

if(submit) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked ? 'yes' : 'no';

    const newBook = createBook(title, author, pages, read);
    
    // console.log(myLib);

    e.target.closest('form').reset();
    document.getElementById('main-container').style.display = 'none';

  });
}
