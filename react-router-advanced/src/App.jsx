import React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Profile from "./components/Profile";

function App() {
  

  return (
    <>
     <Router>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/blog/*" element={<Profile />} />
          </Routes>
        </Router>
      
    </>
  )
}

export default App
