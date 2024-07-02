"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDwXnG8NhoB7lf4-rtRcbhhF4hE7ag-6Pw",
//     authDomain: "sharer-1a6f9.firebaseapp.com",
//     projectId: "sharer-1a6f9",
//     storageBucket: "sharer-1a6f9.appspot.com",
//     messagingSenderId: "836310334720",
//     appId: "1:836310334720:web:d13c681ddb4130d1a707e5",
//     measurementId: "G-C2YC51B9K0"
// };
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const analytics = getAnalytics(app);