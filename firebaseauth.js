

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. Firebase Configuration (using your project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyAtc4dk85IkgFUVPyxNGsMH4dwoWCH2km0",
    authDomain: "authentication-html-9e40e.firebaseapp.com",
    projectId: "authentication-html-9e40e",
    storageBucket: "authentication-html-9e40e.firebasestorage.app",
    messagingSenderId: "210748274464",
    appId: "1:210748274464:web:2ff9a7cfc018c2ace6c945",
    measurementId: "G-08KRE7SE99"
};

// 2. Initialize Firebase and Get Auth Reference
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. Set Up DOM Event Listeners Once the HTML is Loaded
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const statusMessage = document.getElementById("signInMessage");

  // Handle Form Submit Event (prevents page reload)
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // <-- Crucial! Stops the page from refreshing

    const email = emailInput.value;
    const password = passwordInput.value;

    statusMessage.innerText = "Logging in...";
    statusMessage.style.color = "blue";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in successfully!", userCredential.user);
        
        // Redirect to home.html on successful login
        window.location.href = "home.html";
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        statusMessage.style.color = "red";
        
        // Provide friendly error feedback
        if (error.code === 'auth/invalid-credential') {
          statusMessage.innerText = "Incorrect email or password.";
        } else {
          statusMessage.innerText = `Error: ${error.message}`;
        }
      });
  });
});
