# Recipe Book Application - Frontend Internship

## Objective

Create a Recipe Book application using React.js that allows users to browse and view different recipes. The app should include a list of recipes on the homepage, and when a user clicks on a recipe, they should be taken to a separate page displaying the detailed recipe information fetched from the Spoonacular Recipe API.

## Tech Stack

- React.js
- React Router
- Spoonacular Recipe API
- CSS/SCSS
- Netlify/Vercel (for Deployment)

## Completion Instructions

### Functionality

#### Must Have

- **API Integration**: Integrate with the Spoonacular Recipe API (https://spoonacular.com/food-api) to fetch recipe data. You will need to sign up for an API key to access the data.
- **Routing**: Implement routing using React Router to create a multi-page application.
  - Home: Display a list of recipes with their names and a brief description.
  - Recipe Details: A separate page should display the detailed recipe information when a user clicks on a recipe.
- **Homepage**: Display a list of recipes with their names and brief descriptions. Clicking on a recipe should navigate the user to the recipe details page.
- **Recipe Details Page**: A separate page that displays detailed information about the selected recipe, including its name, ingredients, instructions, and an image.
- **API Call for Recipe Details**: When a user clicks on a recipe from the homepage, an API call should be made to fetch detailed information about the selected recipe and display it on the Recipe Details page.
- **Navigation**: Include a navigation bar or breadcrumbs to allow users to easily navigate between the homepage and the recipe details page.
- **Error Handling**: Implement error handling for scenarios such as invalid API responses or network errors and display user-friendly error messages.

#### Nice to Have

- Implement a **search functionality** that allows users to search for recipes by name or ingredients.
- Include a **category or tag filter** to help users narrow down their recipe choices.
- Add **user authentication** to allow users to save their favorite recipes.
- Implement a **rating or review system** for recipes.

### Guidelines to Develop a Project

#### Must Have

- Ensure to use **React.js** to build a visually appealing and user-friendly interface.
- Implement **React Router** for handling routing between the homepage and the recipe details page.
- Use **error handling** to manage API failures or invalid responses.
- **API Integration** should be done using the Spoonacular Recipe API.

#### Nice to Have

- Add styling that enhances **UI/UX** for better user experience.
- Ensure that the app is responsive and works across different screen sizes.

### Submission Instructions

#### Must Have

- Submit a **GitHub repository** containing your project code (Public Link), including necessary configuration files, components, and assets.
- Include the deployed link of the application.
  - GitHub Repository: [https://github.com/akhilbhumireddy/recipe-book.git](https://github.com/akhilbhumireddy/recipe-book.git)
  - Deployed Link: [https://akhilsrecipebook.netlify.app/](https://akhilsrecipebook.netlify.app/)
- **Submit the assignment** via email to: `hiring@wobot.ai` by 2pm today.

#### Nice to Have

- Please **do not share** this assignment on social platforms, as other candidates are attempting the same assignment.

## Resources

### Design Files

- There are no mandatory design files. Feel free to adapt and modify the UI/UX as per your preferences.

### APIs

- **Spoonacular Recipe API**: [https://spoonacular.com/food-api](https://spoonacular.com/food-api)
  - API Key required for access.

### Third-party Packages

- **React Router**: For handling routing between pages.
- **Axios** or **Fetch**: For making API calls.
- **Styled Components** or **CSS**: For styling.
