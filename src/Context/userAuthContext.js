import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from 'firebase/auth';


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(email, password) {
    const allowedProviders = ['gmail.com', 'yahoo.com', 'outlook.com'];
    const emailProvider = email.split('@')[1]?.toLowerCase();

    if (!emailProvider || !allowedProviders.includes(emailProvider)) {
      throw new Error('Invalid Email Provider');
    }

    if (password.length < 6) {
      throw new Error('Please enter stronger Password');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      setVerificationEmailSent(true);
      return user;

    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid Email Address');

      } else if (error.code === 'auth/weak-password') {
        throw new Error('Please enter a stronger password');

      } else {
        throw error;
      }
    }
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function googleSignUp() {
    return googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        throw error;
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, googleSignUp, verificationEmailSent }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}