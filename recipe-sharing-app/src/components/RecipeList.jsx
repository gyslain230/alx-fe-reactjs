  // RecipeList component
  import  useRecipeStore  from './recipeStore';

  const RecipeList = () => {
    
    const { filteredRecipes } = useRecipeStore(state => ({
      filteredRecipes: state.filteredRecipes,
    }));

    return (
      <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
    );
  };

  export default RecipeList;