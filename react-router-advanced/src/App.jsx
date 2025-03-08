import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Profile from "./components/Profile";

const BlogPost = () => {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
};

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/2">Blog Post 2</Link>
          </li>
          <li>
            <Link to="/blog/1">Blog Post 1</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Home route */}
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Blog parent route with nested routes */}
        <Route path="/blog/*" element={<Profile />}>
          {/* Nested blog post route */}
          <Route path=":id" element={<BlogPost />} />
          
          {/* Default nested route */}
          <Route index element={<div>Select a blog post</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;