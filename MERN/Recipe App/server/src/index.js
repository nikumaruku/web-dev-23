import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "../routes/User.js";
import { recipesRouter } from "../routes/Recipes.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://kaizen:M2qIY09vqDAwvysU@recipes.gtq6aa8.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
