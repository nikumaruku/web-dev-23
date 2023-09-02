import express from "express";
import { RecipesModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipesModel.find({});
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecipe = new RecipesModel(req.body);
    const response = await newRecipe.save();
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

export { router as recipesRouter };
