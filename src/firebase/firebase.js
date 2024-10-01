// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiSQbV15gheEfktGvswzystzaJKKIW06k",
  authDomain: "food-junction-61d7c.firebaseapp.com",
  projectId: "food-junction-61d7c",
  storageBucket: "food-junction-61d7c.appspot.com",
  messagingSenderId: "13536775159",
  appId: "1:13536775159:web:208316d8b14923c808fcf2",
  measurementId: "G-9939N5GC9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider

// Export the auth and provider to use in your application
export { auth, googleAuthProvider };
