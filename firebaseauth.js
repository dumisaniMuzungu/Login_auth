
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, setDoc, doc } from "@firebase/firestore";
import { from } from "node:stream/iter";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtc4dk85IkgFUVPyxNGsMH4dwoWCH2km0",
    authDomain: "authentication-html-9e40e.firebaseapp.com",
    projectId: "authentication-html-9e40e",
    storageBucket: "authentication-html-9e40e.firebasestorage.app",
    messagingSenderId: "210748274464",
    appId: "1:210748274464:web:2ff9a7cfc018c2ace6c945",
    measurementId: "G-08KRE7SE99"
  };

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submitSignIn');
submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(5)
})