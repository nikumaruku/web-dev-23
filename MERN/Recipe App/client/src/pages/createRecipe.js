import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  console.log(userID);

  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageURL: "",
    cookingTime: 0,
    recipeOwner: userID,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredients = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const submitRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe has been successfully created!");
    } catch (err) {
      // console.error(err);
      alert("Something went wrong! Please try again");
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            value={ingredient}
            name="ingredients"
            type="text"
            onChange={(e) => handleIngredientChange(e, index)}
          />
        ))}
        <button type="button" onClick={addIngredients}>
          Add Ingredient
        </button>
        <br />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <br />
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={submitRecipe}>
          Create Recipe
        </button>
        <br />
      </form>
    </div>
  );
};
