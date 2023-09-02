import mongoose from "mongoose";

const RecipesSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  imageURL: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  recipeOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const RecipesModel = mongoose.model("recipes", RecipesSchema);
