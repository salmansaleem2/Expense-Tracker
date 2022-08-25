import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgxhF9FfKN22MrW3L16fk22QTyA2s7sWc",
  authDomain: "mymoney-c3f89.firebaseapp.com",
  projectId: "mymoney-c3f89",
  storageBucket: "mymoney-c3f89.appspot.com",
  messagingSenderId: "383937124703",
  appId: "1:383937124703:web:62b12b35d07dc04d997eea",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
