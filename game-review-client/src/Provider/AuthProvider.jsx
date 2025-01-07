import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { auth } from "../Firebase/Firebase.init";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [dark, SetDark] = useState(false);

  const handleToggle = () => {
    const newDarkMode = !dark;
    SetDark(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(()=>{
    const savedDark = localStorage.getItem("darkMode") === 'true';
    SetDark(savedDark);
    if (savedDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[])

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google provider
  const googleProvider = () => {
    return signInWithPopup(auth, provider);
  };
  // update profile
  const profile = (userProfile) => {
    setLoading(false);
    return updateProfile(auth.currentUser, userProfile);
  };
  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => unsubscribe();
    });
  }, []);
  const authInfo = {
    dark,
    user,
    loading,
    setUser,
    logOut,
    loginUser,
    createUser,
    profile,
    googleProvider,
    handleToggle,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
}
