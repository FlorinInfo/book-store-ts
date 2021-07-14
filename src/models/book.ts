import fs from 'fs';
import path from 'path'
const { books } = require('../data/books.json');


interface Book{
    id:number;
    title:string;
    author:string;
}

export default  class BookManager {

    public createBook(book:Book){
        books.push(book);
        fs.writeFileSync(path.resolve(__dirname,'../data/books.json'), JSON.stringify({ books }));
    }

    public findBook(id:number) {
        console.log(id);
    }

    public fetchBooks():Book[]{
        return books;
    }
}