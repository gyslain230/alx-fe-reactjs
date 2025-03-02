import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe" element={<RecipeDetails />} />
      </Routes>
    </Router>
  )
}

export default App
