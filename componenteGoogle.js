import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyCR337mlxq55VzX4jeOg-oxlUphcCBKHt8",
    authDomain: "login15601-17150.firebaseapp.com",
    projectId: "login15601-17150",
    storageBucket: "login15601-17150.appspot.com",
    messagingSenderId: "140109813515",
    appId: "1:140109813515:web:7041981fb3224a1be7f40e"
  
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);


const Google = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p className="google">Hola,  {user.displayName}!</p>
          <button className= 'googlebtn' onClick={signOut}>Cerrar sesi n</button>
        </div>
      ) : (
        <button className='googlebtn' onClick={signInWithGoogle}>Iniciar sesi n con Google</button>
      )}
    </div>
  );
};

export default Google;