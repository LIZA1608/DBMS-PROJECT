// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRXzVJ_3zZ5Q51UkIIDuvbz-mLc1s_jhc",
    authDomain: "website-4997d.firebaseapp.com",
    projectId: "website-4997d",
    storageBucket: "website-4997d.appspot.com",
    messagingSenderId: "444730363151",
    appId: "1:444730363151:web:ad0c32e2d90c65cf2bc27a",
    measurementId: "G-JF07JVPM39"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };