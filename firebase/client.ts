import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3D9F9zDUWl1gfvKHwWRSSxSyctGSmct4",
  authDomain: "prepwise-3c7b9.firebaseapp.com",
  projectId: "prepwise-3c7b9",
  storageBucket: "prepwise-3c7b9.firebasestorage.app",
  messagingSenderId: "1074109707786",
  appId: "1:1074109707786:web:62c0597c6ef18c0dc751f3",
  measurementId: "G-34BV1M4XWM"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);