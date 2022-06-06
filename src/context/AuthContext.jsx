import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const login = (email, password) => {
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        setIsAuth(true);
      });
  };
  // console.log(isAuth)

  const logout = () => {
    localStorage.setItem("token", "");
    setIsAuth(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("");
    } else {
      navigate("/login");
    }
  }, [isAuth, from, navigate]);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
