import express from "express";
const app = express();
const port = 6666; // default port to listen
app.use(express.json());
import booksRoutes from "./routes/library";
app.use(booksRoutes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})