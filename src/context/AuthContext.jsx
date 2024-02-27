import React, { createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { actionType } from "../redux/actionType";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: actionType.CHECK_USER, payload: user });
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function signUpWithEmailAndPassword(email, password, name, lastName) {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      let person = res.user;
      updateProfile(person, {
        displayName: `${name} ${lastName}`,
      });
    });
  }

  async function logInWithEmailAndPassword(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function signUpWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  const values = {
    signUpWithEmailAndPassword,
    signUpWithGoogle,
    logInWithEmailAndPassword,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
