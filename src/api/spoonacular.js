import axios from "axios";

const API_KEY = "2365a7f4041b476cabda713e151f7326";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: { query, number: 10, apiKey: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
