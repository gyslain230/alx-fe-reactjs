import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error("Error loading recipes:", error);
        alert("Failed to load recipes! Please try again later.");
      });
  }, []);

  return (
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p class="text-gray-600">{recipe.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
