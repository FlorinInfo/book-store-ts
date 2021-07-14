import express from "express";
import  { getAllBooks, postAddBook } from '../controllers/books';
const router = express.Router();

router.get('/', getAllBooks);

router.post("/addBook", postAddBook);

export default router;