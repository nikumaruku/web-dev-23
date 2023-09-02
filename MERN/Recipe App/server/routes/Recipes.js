import express from "express";
import { RecipesModel } from "../models/Recipes.js";

const router = express.Router();

//Get all recipes
router.get("/", async (req, res) => {
  try {
    const response = await RecipesModel.find({});
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

//Create new recipes
router.post("/", async (req, res) => {
  try {
    const newRecipe = new RecipesModel(req.body);
    const response = await newRecipe.save();
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

//Edit recipe ---> Study this part
router.put("/", async (req, res) => {
  try {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await RecipesModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

//Get recipe by id ---> Study this part
router.get("/savedRecipes/id", async (req, res) => {
  try {
    const user = await RecipesModel.findById(req.body.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

//Get saved recipes ---> Study this part
router.get("/savedRecipes", async (req, res) => {
  try {
    const user = await RecipesModel.findById(req.body.userID);
    const savedRecipes = await RecipesModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

export { router as recipesRouter };
