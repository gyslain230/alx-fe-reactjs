import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <Search />
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
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" />

          <Route path="/blog/:id">
            <Route path=":id" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
