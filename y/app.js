// @ts-nocheck
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADYz2jYqqLt6b65p0R3uJ9sXhGfBbhXO4",
    authDomain: "elecbill-codemaster.firebaseapp.com",
    projectId: "elecbill-codemaster",
    storageBucket: "elecbill-codemaster.firebasestorage.app",
    messagingSenderId: "324265233760",
    appId: "1:324265233760:web:5daced32c43e5d4ae4a205",
    measurementId: "G-77LG8J3ZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };