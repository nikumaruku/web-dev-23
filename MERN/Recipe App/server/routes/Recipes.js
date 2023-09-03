import express from "express";
import { RecipesModel } from "../models/Recipes.js";
import { UserModel } from "../models/User.js";
import { verifyToken } from "./User.js";

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
router.post("/", verifyToken, async (req, res) => {
  try {
    const newRecipe = new RecipesModel(req.body);
    const response = await newRecipe.save();
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

//Save recipe*
router.put("/", verifyToken, async (req, res) => {
  try {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

//Get saved recipes*
router.get("/savedRecipes/id/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

//Display saved recipes*
router.get("/savedRecipes/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedRecipes = await RecipesModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    console.error({ message: err });
  }
});

export { router as recipesRouter };
