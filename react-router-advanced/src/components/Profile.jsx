import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useMatch, Routes ,useParams} from 'react-router-dom';

const User = () => {
    // useParams hook is used to access route parameters
    const { userId } = useParams();
    return <h3>User ID: {userId}</h3>;
};

function Profile() {
    let { path, url } = useMatch();

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
            <li>
                <Link to="/user/2">User 2</Link>
            </li>
            <li>
            <Link to="/user/1">User 1</Link>
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
            {/* Dynamic route with a userId parameter */}
            <Route path="/user/:userId" component={User} />
                {/* Default route to Home component */}
            <Route path="/">
                <h2>Home</h2>
            </Route>

          

        </Routes>
    </div>
    )
    
};
export default Profile;