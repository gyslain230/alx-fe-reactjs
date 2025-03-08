import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Routes } from 'react-router-dom';
function Profile() {
    let { path, url } = useRouteMatch();

    return(
        <div>
        <h2>Dashboard</h2>

        <ul>
            <li>
                <Link to={`${url}/profile`}>Profile</Link>
            </li>
            <li>
                <Link to={`${url}/settings`}>Settings</Link>
            </li>
        </ul>

        {/* Nested routes within the Dashboard component */}
       
        <Routes>
          <Route exact path={path}>
                  <h3>Please select an option.</h3>
            </Route>
            <Route path={`${path}/ProfileDetails`}>
                <Profile />
            </Route>
            <Route path={`${path}/ProfileSettings`}>
                <Settings />
            </Route>

          

        </Routes>
    </div>
    )
    
};
export default Profile;