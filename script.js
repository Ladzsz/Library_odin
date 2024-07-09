window.onload = function() {
    // Button to show form
    const insertBtn = document.querySelector('.insert-btn');
    insertBtn.addEventListener('click', function() {
        document.getElementById('formContainer').style.display = 'block';
    });
};

//array to hold the books

const library = [];

//constructor to make books

function Book(bookname, author, page) {
    this.bookname = bookname;
    this.author = author;
    this.page = page;
}

//function to add books to library

function addbooktolibrary(library) {
    const container = document.getElementById('card-container');
    library.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';

        const bookName = document.createElement('h3');
        bookName.textContent = `Book Name: ${book.bookName}`;
        card.appendChild(bookName);

        const author = document.createElement('h3');
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement('h3');
        pages.textContent = `Pages: ${book.page}`;
        card.appendChild(pages);

        container.appendChild(card);
    });
}

//getting user input from form

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookname = document.getElementById('bookname').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('pages').value;

    const newBook = new Book(bookname, author, page);

    library.push(newBook);
});