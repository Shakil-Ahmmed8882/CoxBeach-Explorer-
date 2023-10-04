import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
      GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../🔥 Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

// provider
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


// sign in with google
  const googleSignIn = () => {
      return signInWithPopup(auth,googleProvider)
  }

  //logout
  const logOut = () => {
    return signOut(auth);
  };

  // tracking the users
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      }
    });

    return () => unSubscribe;
  }, []);

  const userIfo = {
    user,
    createUser,
    logOut,
    signIn,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={userIfo}>{children}</AuthContext.Provider>
  );
};

// prop validation object
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
