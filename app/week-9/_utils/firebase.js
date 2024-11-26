// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_n9dlF-aggd9qQrPe8QgWhXQ_nkuZQ_M",
    authDomain: "cprg306-assignments-ffc63.firebaseapp.com",
    projectId: "cprg306-assignments-ffc63",
    storageBucket: "cprg306-assignments-ffc63.firebasestorage.app",
    messagingSenderId: "330031510979",
    appId: "1:330031510979:web:b29b654c93cbfb5ce23976",
    measurementId: "G-3X6ERW8342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);