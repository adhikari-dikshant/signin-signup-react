// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQkIkwRlFVrQ3BJSPX0VdkHLlJAkHNq_Q",
    authDomain: "signin-signup-fd6f5.firebaseapp.com",
    projectId: "signin-signup-fd6f5",
    storageBucket: "signin-signup-fd6f5.appspot.com",
    messagingSenderId: "402994711031",
    appId: "1:402994711031:web:25fd2ca30bfae6f64846f2",
    measurementId: "G-8R2P8718LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);