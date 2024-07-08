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