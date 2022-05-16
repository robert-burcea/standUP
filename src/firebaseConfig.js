// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
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
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
const analytics = getAnalytics(app);