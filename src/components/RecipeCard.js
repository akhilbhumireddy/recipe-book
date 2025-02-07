import React from "react";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <a href={`/recipe/${recipe.id}`}>View Recipe</a>
    </div>
  );
};

export default RecipeCard;
