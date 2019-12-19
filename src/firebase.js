import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

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
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in database where user might be
  const userRef = firestore.doc(`users/${user.uid}`);
  // Go and fetch  document from location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createedAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createedAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export default firebase;
