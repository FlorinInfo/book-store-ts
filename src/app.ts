import express from "express";
import booksRoutes from "./routes/library";

const app = express();
const port = 6666; // default port to listen

app.use(express.json());
app.use(booksRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})