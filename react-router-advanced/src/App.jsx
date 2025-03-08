import React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Profile from "./components/Profile";

function App() {
  

  return (
    <>
     <Router>
      <nav>
        <ul>
          <li><Link to="/">Dashbord</Link></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" >Home</Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
