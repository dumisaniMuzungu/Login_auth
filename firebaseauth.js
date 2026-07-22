
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore, setDoc, doc } from "@firebase/firestore";
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

// Function to display messages
function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;

    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

// Login
const signIn = document.getElementById("submitSignIn");

signIn.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            showMessage("Login Successful!", "signInMessage");

            // Save user ID
            localStorage.setItem("loggedInUserId", user.uid);

            // Redirect to homepage
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/invalid-credential":
                    showMessage("Incorrect email or password.", "signInMessage");
                    break;

                case "auth/user-not-found":
                    showMessage("User not found.", "signInMessage");
                    break;

                case "auth/wrong-password":
                    showMessage("Incorrect password.", "signInMessage");
                    break;

                case "auth/invalid-email":
                    showMessage("Invalid email address.", "signInMessage");
                    break;

                default:
                    showMessage(error.message, "signInMessage");
            }
        });
});