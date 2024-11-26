import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Firebase Storage

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_n9dlF-aggd9qQrPe8QgWhXQ_nkuZQ_M",
    authDomain: "cprg306-assignments-ffc63.firebaseapp.com",
    projectId: "cprg306-assignments-ffc63",
    storageBucket: "cprg306-assignments-ffc63.appspot.com", // Fixed typo in the storage bucket URL
    messagingSenderId: "330031510979",
    appId: "1:330031510979:web:b29b654c93cbfb5ce23976",
    measurementId: "G-3X6ERW8342",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // Uncomment if using Firestore
export const storage = getStorage(app); // Uncomment if using Firebase Storage