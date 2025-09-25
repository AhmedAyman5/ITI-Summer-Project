import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Return user if exist
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // signup new user
  const signup = (userData) => {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  // login
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setCurrentUser(savedUser);
      return true;
    }
    return false;
  };

  // logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
