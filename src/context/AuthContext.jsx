import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const AuthContext = createContext(null);

const SESSION_TIMEOUT = 60 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading, null = signed out
  const [sessionExpired, setSessionExpired] = useState(false);
  const lastActivityRef = useRef(Date.now());

  function resetActivity() {
    lastActivityRef.current = Date.now();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u ?? null);
      if (u) {
        setSessionExpired(false);
        lastActivityRef.current = Date.now();
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const events = ["mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) =>
      window.addEventListener(e, resetActivity, { passive: true }),
    );

    const interval = setInterval(() => {
      if (
        auth.currentUser &&
        Date.now() - lastActivityRef.current > SESSION_TIMEOUT
      ) {
        setSessionExpired(true);
        firebaseSignOut(auth);
      }
    }, 30_000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetActivity));
      clearInterval(interval);
    };
  }, []);

  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  function signOut() {
    setSessionExpired(false);
    return firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{ user, sessionExpired, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
