import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/properties" element={<Properties/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Login />} />
        </Routes>
      </AuthProvider>
      </Router>
  );
};

export default App;
