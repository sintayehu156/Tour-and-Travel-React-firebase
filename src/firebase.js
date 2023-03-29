// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALoc0M3IcREDCciRS5-xew1UY42GnEWBc",
    authDomain: "fir-auth-a3dab.firebaseapp.com",
    projectId: "fir-auth-a3dab",
    storageBucket: "fir-auth-a3dab.appspot.com",
    messagingSenderId: "185056394621",
    appId: "1:185056394621:web:5935d1900dfbf660612014",
    measurementId: "G-0Z7FRK6RVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app