import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useMatch, Routes, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Changed from userId to id to match route parameter
  return <h3>Blog Post ID: {id}</h3>; //["/blog/:id", "BlogPost"]
};

function Profile() {
  const match = useMatch("/blog/:id");
  const path = match?.pattern?.path;
  const url = match?.pathname;

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <h2>Blog Posts</h2>
        {match && (
          <div>
            <li>
              <Link to={`${url}/profile`}>Profile</Link>
            </li>
            <li>
              <Link to={`${url}/settings`}>Settings</Link>
            </li>
          </div>
        )}
        <li>
          <Link to="/blog/2">Blog Post 2</Link>
        </li>
        <li>
          <Link to="/blog/1">Blog Post 1</Link>
        </li>
      </ul>

      <Routes>
        {/* Main blog post route */}
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Nested routes */}
        <Route path={`${path}/ProfileDetails`} element={<div>Profile Details</div>} />
        <Route path={`${path}/ProfileSettings`} element={<div>Profile Settings</div>} />
        
        {/* Default route */}
        <Route index element={<div>Please select an option.</div>} />
      </Routes>
    </div>
  );
};

export default Profile;