import express from "express";
import { BookModel } from "../models/book.js";

const router = express.Router();

router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const allBooks = await BookModel.find({});
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book data" });
  }
});

//Get book by ID
router.get("/:id", async (req, res) => {
  try {
    const bookID = req.params.id;
    const book = await BookModel.findById({ _id: bookID });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book requested!" });
  }
});

//Update book information
router.put("/:id", async (req, res) => {
  try {
    const bookID = req.params.id;

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .json({ error: "Please fill in all the book details!" });
    }

    const updatedBookInfo = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await BookModel.findByIdAndUpdate(
      { _id: bookID },
      updatedBookInfo
    );
    res
      .status(200)
      .json({ message: "Book info has been successfully updated!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating book information!" });
  }
});

//Delete book based on ID
router.delete("/:id", async (req, res) => {
  try {
    const bookID = req.params.id;
    const book = await BookModel.findOneAndDelete({ _id: bookID });
    res.status(200).json({ message: "Book has been successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book requested!" });
  }
});

export { router as bookRouter };
