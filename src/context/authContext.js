import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";
export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log("user", user);
  const handleSignWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSignWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  });
  return (
    <authContext.Provider
      value={{
        handleSignWithGoogle,
        user,
        handleLogout,
        handleSignWithFacebook,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
export default AuthContextProvider;
