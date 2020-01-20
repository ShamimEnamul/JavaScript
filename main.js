//book class

class Book{
    constructor(title,author,isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class
class UI{
    static displayBooks() {
        const storeBooks = [
            {
                title:'book1',
                author:'Author1',
                isbn:'4578758676856'
            },
            {
                title:'book2',
                author:'Author2',
                isbn:'888888888888'
            }
        ];
        
        const books = storeBooks;

        books.forEach((book) =>{
            UI.addBookToList(book);
        })
    }

   static addBookToList(book)
   {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);

   }
}

//event display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event add book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;

//initialize book
const b = new Book(title,author,isbn);


});




//event delete book