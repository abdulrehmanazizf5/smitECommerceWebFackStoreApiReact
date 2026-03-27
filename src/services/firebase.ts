// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Apne Firebase project ki configuration details yahan daalni hain
const firebaseConfig = {
  apiKey: "AIzaSyAteI8YLidBXLSBDeSWiHcJ9jT8MmqtXy8",
  authDomain: "smitecommercewebreactauth.firebaseapp.com",
  projectId: "smitecommercewebreactauth",
  storageBucket: "smitecommercewebreactauth.firebasestorage.app",
  messagingSenderId: "661756974999",
  appId: "1:661756974999:web:920afbfa8c00223f1b56d2",
  measurementId: "G-JB8J0MC8L0",
};

// Firebase ko initialize karen
const app = initializeApp(firebaseConfig);
// Authentication service ko export karen taake dusre components mein use ho sake
export const auth = getAuth(app);
