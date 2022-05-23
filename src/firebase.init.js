// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6Bh3o80aEh6jxseQctLWslnGSDtXONCM",
    authDomain: "tools-manufacturer-97d98.firebaseapp.com",
    projectId: "tools-manufacturer-97d98",
    storageBucket: "tools-manufacturer-97d98.appspot.com",
    messagingSenderId: "602275418767",
    appId: "1:602275418767:web:acaefaaaec9b24b0c516fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;