import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, useMatch, Routes ,useParams} from 'react-router-dom';

const blogPost = () => {
    // useParams hook is used to access route parameters
    const { userId } = useParams();
    return <h3>User ID: {userId}</h3>;
};


function Profile() {
    const match = useMatch("/blog/:id",);

  // Extract path and URL from the match object
  const path = match ? match.pattern.path : null;
  const url = match ? match.pathname : null;

    return(
        <div>
        <h2>Dashboard</h2>

        <ul>
            <h2> BlogPost</h2>
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
                <Link to="/blog/2">User 2</Link>
            </li>
            <li>
            <Link to="/blog/1">User 1</Link>
            </li>
        </ul>

        {/* Nested routes within the Dashboard component */}
       
        <Routes>
          <Route exact path={path}>
                  Please select an option.
            </Route>
            <Route path={`${path}/ProfileDetails`}>
                
            </Route>
            <Route path={`${path}/ProfileSettings`}>
                
            </Route>
            {/* Dynamic route with a userId parameter */}
            <Route path="/blog/:id" component={blogPost} />
                {/* Default route to Home component */}
            <Route path="/">
                Home
            </Route>

          

        </Routes>
    </div>
    )
    
};
export default Profile;