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
        const lsit = document.getElementById('book-list');
        const row = document.createElement('tr');
   }
}
//event add book
//event display book
//event delete book