import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"; // Correct import
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRFnheENI1PmxjT_w_u-TCHCtvjofz9JM",
  authDomain: "loginmodule-77188.firebaseapp.com",
  projectId: "loginmodule-77188",
  storageBucket: "loginmodule-77188.firebasestorage.app",
  messagingSenderId: "742637306343",
  appId: "1:742637306343:web:ccef9869847d9b717b3d42",
  measurementId: "G-W0Z18YBW5W"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
});

export { app, auth, db, analytics,GoogleAuthProvider, signInWithEmailAndPassword }; 
