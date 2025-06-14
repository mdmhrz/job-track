// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQZYs5I7fwcUGGE5Zgz0Lj1Pq62t-Hxh4",
    authDomain: "job-track-53365.firebaseapp.com",
    projectId: "job-track-53365",
    storageBucket: "job-track-53365.firebasestorage.app",
    messagingSenderId: "394645390901",
    appId: "1:394645390901:web:fc05a945e2bd090656d37c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;