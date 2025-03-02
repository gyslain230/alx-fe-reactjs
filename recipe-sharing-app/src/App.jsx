import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import SearchBar from './components/SearchBar';

function App() {
  

  return (
   <>
    
    <BrowserRouter>
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
    <RecipeDetails/>
    <RecipeList/>
    <EditRecipeForm/>
    <DeleteRecipeButton/>

    </>
  )
}

export default App
