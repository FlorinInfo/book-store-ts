import express, {json, Request, response, Response} from "express";
import BookManager, { Book } from "../models/book";
const { books } = require('../data/books.json');


export const getAllBooks = (req: Request, res: Response) => {
    const books = new BookManager();
    res.send(books.fetchBooks());
};

export const postAddBook = (req: Request,  res: Response) => {
    const found = books.find((book:Book) => book.title === req.body.title && book.author === req.body.author);
    if(!found) {
        const book = new BookManager();
        book.createBook(req.body);
        res.send({message:"Book added!"});
    }
    else {
        res.send({message:"Book already added!"});
    }
}

export const getFindById = (req: Request, res: Response) => {
    const book = new BookManager();
    const found =  book.findBook(req.body.id);
    found === undefined ? res.send({message:"Book doesn't exist"}) : res.send(found);
}

export const deleteBookById = (req: Request, res: Response) => {
    const book = new BookManager();
    const found = book.findBook(req.body.id);
    if(!found) {
        res.send({message:"Book doesn't exist"});
    }
    else {
        book.deleteBook(req.body.id);
        res.send({message:"Book deleted!"})
    }
}

export const putEditBook = (req: Request, res: Response) => {
    const book = new BookManager();
    let found = book.findBook(req.body.id);
    if(found && (req.body.title || req.body.author)) {
        book.editBook(found, req.body.title, req.body.author);
        res.send({message:"Book edited with succes!"});
    }
    else {
        res.send({message:"Book doesn't exist or you didn't provided the title or author for editing"});
    }
}