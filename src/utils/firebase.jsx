// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpr8bAfDAxMdBDaMzRFstQMg0W1j4uU44",
  authDomain: "netflixgpt-dfeda.firebaseapp.com",
  projectId: "netflixgpt-dfeda",
  storageBucket: "netflixgpt-dfeda.firebasestorage.app",
  messagingSenderId: "160702067846",
  appId: "1:160702067846:web:30612d2817ec3135ba8d07",
  measurementId: "G-66CTH4BPKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(app);

export const auth = getAuth();
