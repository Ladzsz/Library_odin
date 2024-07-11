window.onload = function() {
    // Button to show form
    const insertBtn = document.querySelector('.insert-btn');
    insertBtn.addEventListener('click', function() {
        document.getElementById('formContainer').style.display = 'block';
    });
};

// Event listener for form submission

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookname = document.getElementById('bookname').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('pages').value;

    const newBook = new Book(bookname, author, page);
    library.push(newBook);

    addbooktolibrary(library);

    document.getElementById('myForm').reset();
});

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
    const container = document.querySelector('.card-container');
    container.innerHTML = '';

    library.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';

        const bookName = document.createElement('h3');
        bookName.textContent = `Book Name: ${book.bookname}`;
        card.appendChild(bookName);

        const author = document.createElement('h3');
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement('h3');
        pages.textContent = `Pages: ${book.page}`;
        card.appendChild(pages);

        const btnDiv = document.createElement('div');
        btnDiv.className = 'btn-div';
        card.appendChild(btnDiv);

        const readBTN = document.createElement('button');
        readBTN.className = `readBTN`;
        readBTN.textContent = `Read`;
        btnDiv.appendChild(readBTN);

        const removeBTN = document.createElement('button');
        removeBTN.className = `removeBTN`;
        removeBTN.textContent = `Remove`;
        btnDiv.appendChild(removeBTN);

        container.appendChild(card);
    });
}


