import express from "express";
import mongoose from "mongoose";
import { BookModel } from "../models/book.js";

const app = express();
const port = 3001;

//Express middleware
app.use(express.json());

//MongoDB connection configuration
mongoose
  .connect(
    "mongodb+srv://niksyahmi:TMGMh01cgABuTwGf@book-project.4ib6wz6.mongodb.net/book-project?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//--------> Routes

//Create new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .json({ error: "Please fill in all the book details!" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await BookModel.create(newBook);

    return res.status(201).json(book);
  } catch (err) {
    console.error("Error creating a book:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//Get all books
app.get("/books", async (req, res) => {
  try {
    const allBooks = await BookModel.find({});
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book data" });
  }
});

//Get book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const bookID = req.params.id;
    const book = await BookModel.findById({ _id: bookID });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book requested!" });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
