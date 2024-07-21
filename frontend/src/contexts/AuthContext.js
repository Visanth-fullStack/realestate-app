import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserInfo, login, register } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  
  useEffect(() => {
      const token = localStorage.getItem("token");
    if (token) {
      getUserInfo()
        .then((userData) => {
          console.log("data", userData);
          setUser(userData);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      !location.includes('auth' || 'signup') && navigate("/login");
    }
}, []);

  const signInUser = async (email, password, page) => {
    const role = page.split("/")[1] === "auth" ? "admin" : "customer";
    setLoading(true);
    try {
      const response =
        page === "/login"
          ? await login(email, password)
          : await register(email, password, role);
      localStorage.setItem("token", response.token);
      setUser(response.user);
      navigate('/properties');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser, loading, signInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
