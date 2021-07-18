import fs from 'fs';
import path from 'path'
import crypto from 'crypto';
const { books } = require('../data/books.json');


export interface Book{
    id:string;
    title:string;
    author:string;
}

export default  class BookManager {

    public createBook(book:Book){
        book.id = this.generateId();
        books.push(book);
        fs.writeFileSync(path.resolve(__dirname,'../data/books.json'), JSON.stringify({ books }));
    }

    public findBook(id:string):string {
        const found = books.find((book:Book) => book.id === id);
        return found;
    }

    public deleteBook(id:string) {
        const index = books.findIndex((book:Book) => book.id === id);
        books.splice(index, 1);
        fs.writeFileSync(path.resolve(__dirname,'../data/books.json'), JSON.stringify({ books }));
    }

    public editBook(book:any, title:string|undefined, author:string|undefined) {
        const index = books.findIndex((b:Book) => b.id === book.id);
        title != undefined ? books[index].title = title : console.log("Title not sended");
        author != undefined ? books[index].author = author : console.log("Author not sended");   
        fs.writeFileSync(path.resolve(__dirname,'../data/books.json'), JSON.stringify({ books }));
    }

    public generateId():string {
        return crypto.randomBytes(16).toString("hex");
    }

    public fetchBooks():Book[]{
        return books;
    }
}