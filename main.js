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

   static cleanField()
   {
       document.getElementById('title').value = '';
       document.getElementById('author').value = '';
       document.getElementById('isbn').value = '';
   }

   static deleteABook(el)
   {
       if(el.classList.contains('delete'))
       {
            el.parentElement.parentElement.remove();
       }
   }
}

//event display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event add book
document.querySelector('#book-form').addEventListener('submit', (e) => {

e.preventDefault();
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const isbn = document.getElementById('isbn').value;

//initialize book
const book = new Book(title,author,isbn);
UI.addBookToList(book);

UI.cleanField();


});
document.getElementById('book-list').addEventListener('click',(e)=>
{
    UI.deleteABook(e.target);
})




//event delete book