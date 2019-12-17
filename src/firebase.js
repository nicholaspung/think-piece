import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDobt6aPLG9XdNKR8MoKmT5qWf5U6dINXM",
  authDomain: "think-piece-tutorial.firebaseapp.com",
  databaseURL: "https://think-piece-tutorial.firebaseio.com",
  projectId: "think-piece-tutorial",
  storageBucket: "think-piece-tutorial.appspot.com",
  messagingSenderId: "733686601534",
  appId: "1:733686601534:web:9c97720ad7fd90b9923e6f"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export default firebase;
