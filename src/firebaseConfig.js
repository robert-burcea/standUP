// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKHVcx6gclD0ocdsHGOxKp_6orXvvDUk",
  authDomain: "standup-bab78.firebaseapp.com",
  projectId: "standup-bab78",
  storageBucket: "standup-bab78.appspot.com",
  messagingSenderId: "795720283012",
  appId: "1:795720283012:web:8e7a2f0dafb632074d23d1",
  measurementId: "G-Z044GN93EZ"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore(app);