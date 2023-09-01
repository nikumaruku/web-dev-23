import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://kaizen:M2qIY09vqDAwvysU@recipes.gtq6aa8.mongodb.net/recipes?retryWrites=true&w=majority");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
