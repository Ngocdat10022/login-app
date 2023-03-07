import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";
export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [acctoken, setAcctoken] = useState("");
  const handleSignWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // console.log("userGoogleAccount", result?.user);
      // console.log("accessTokenGoogleAccount", token);
      const user = result.user;
      setAcctoken(token);
      setUser(user);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSignWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithRedirect(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setUser(result?.user);
      setAcctoken(accessToken);
      // console.log("userFacebookAccount", result?.user);
      // console.log("accessTokenFacebookAccount", accessToken);
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
        acctoken,
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
