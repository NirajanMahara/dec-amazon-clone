import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzS9Vli-GG1o3tKiFD7pm--su56HE-Ozw",
  authDomain: "amzn-202007.firebaseapp.com",
  databaseURL: "https://amzn-202007.firebaseio.com",
  projectId: "amzn-202007",
  storageBucket: "amzn-202007.appspot.com",
  messagingSenderId: "653851854469",
  appId: "1:653851854469:web:6075bee19a8bf118174bec",
  measurementId: "G-F35F2W1XTT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
