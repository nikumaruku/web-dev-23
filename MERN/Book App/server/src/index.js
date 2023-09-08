import express from "express";
import mongoose from "mongoose";
import { bookRouter } from "../router/bookRouter.js";

const app = express();
const port = 3001;

//Express middleware
app.use(express.json());

//Routes
app.use("/books", bookRouter);

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

//Listen to port
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
