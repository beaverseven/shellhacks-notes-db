// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPIGwWnVHW6RSmwkuaiQnEHpnNclkPogQ",
  authDomain: "shellhacks-notesdb.firebaseapp.com",
  projectId: "shellhacks-notesdb",
  storageBucket: "shellhacks-notesdb.appspot.com",
  messagingSenderId: "844349899490",
  appId: "1:844349899490:web:51a9d7f8f24ca72a7c14bb",
  measurementId: "G-BTRQGS4EN8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

//notes collection
const Notes = collection(db, "Notes");

//get collection data
export default Notes;
