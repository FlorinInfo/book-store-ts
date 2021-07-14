import express, {Request, Response} from "express";
import BookManager from "../models/book";

import Book from "../models/book";

export const getAllBooks = (req: Request, res: Response) => {
    const books = new BookManager();
    res.send(books.fetchBooks());
};

export const postAddBook = (req: Request,  res: Response) => {
    const book = new BookManager();
    book.createBook(req.body);
    res.send("hihi")
}
