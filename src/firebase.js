import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFnaJfWrGsQ_OtjYJhZonPKXiOzivkles",
  authDomain: "linkedin-webapp-5d1d9.firebaseapp.com",
  projectId: "linkedin-webapp-5d1d9",
  storageBucket: "linkedin-webapp-5d1d9.appspot.com",
  messagingSenderId: "791965215474",
  appId: "1:791965215474:web:430f581e492acf9fddbe6b"
}; 


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };