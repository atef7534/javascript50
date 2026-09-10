import React from "react";
import IngredientsList from "./components/IngredientsList";
import LocalModelResponse from "./components/LocalModelResponse";
import { getRecipeFromAI } from "./ai";
/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * We'll start with a mini-quiz:
 *
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *
 *
 * 2. What action from the user should trigger getting the recipe?
 *
 */

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function getRecipe() {
    setRecipeShown(true);
    setIsLoading(true);
    setError("");

    try {
      const generatedRecipe = await getRecipeFromAI(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError(err.message || "Unable to get a recipe from the local model.");
    } finally {
      setIsLoading(false);
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")?.trim();

    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  return (
    <main className="recipe-workspace">
      <section className="intro" aria-labelledby="workspace-title">
        <p className="eyebrow">PANTRY-TO-PLATE</p>
        <h2 id="workspace-title">What’s in your kitchen?</h2>
        <p>Tell Chef Claude what you have, then turn your ingredients into a meal worth making.</p>
      </section>

      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length === 0 ? (
        <div className="empty-pantry">
          <span aria-hidden="true">✦</span>
          <p>Start with an ingredient you love — fresh, frozen, or tucked away in the cupboard.</p>
        </div>
      ) : (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipeShown && (
        <LocalModelResponse
          recipe={recipe}
          isLoading={isLoading}
          error={error}
        />
      )}
    </main>
  );
}
