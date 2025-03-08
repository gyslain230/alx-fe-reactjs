import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useMatch, Routes,  } from 'react-router-dom';



function Profile() {
  const match = useMatch("/blog/:id");
  const path = match?.pattern?.path;
  const url = match?.pathname;
  const { toggleAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    toggleAuth();
    navigate('/');
  };

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
       
      </ul>
      <div>
      <h2>Protected Profile</h2>
      <button onClick={handleLogout}>Log out</button>
      {/* Add your existing profile content here */}
    </div>

      <Routes>
        
        
        {/* Nested routes */}
        <Route path={`${path}/ProfileDetails`} element={<div>Profile Details</div>} />
        <Route path={`${path}/ProfileSettings`} element={<div>Profile Settings</div>} />
        
        
      </Routes>
    </div>
  );
};

export default Profile;