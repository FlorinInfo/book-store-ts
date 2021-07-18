import express from "express";
import  { getAllBooks, postAddBook, getFindById, deleteBookById, putEditBook } from '../controllers/books';

const router = express.Router();

router.get('/', getAllBooks);

router.post("/addBook", postAddBook);

router.get('/findbook', getFindById);

router.delete("/deletebook", deleteBookById);

router.put("/editbook", putEditBook);

export default router;