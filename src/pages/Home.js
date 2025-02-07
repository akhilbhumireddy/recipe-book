import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../api/spoonacular";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes("").then(setRecipes);
  }, []);

  return (
    <div className="home-container">
      <h1>Recipe Book</h1>
      <SearchBar onSearch={(query) => fetchRecipes(query).then(setRecipes)} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
