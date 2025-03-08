import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate, useLocation } from 'react-router-dom';

// Create Auth Context
interface AuthContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

// Auth Provider component
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom auth hook
function useAuth() {
  return useContext(AuthContext);
}

// Protected Route component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Login component
function Login() {
  const { toggleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    toggleAuth();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

// Updated Profile component with logout


// Main App component
function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }/>

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;