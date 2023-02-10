import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCukqVgD3Bzn6iEkgGTvAuPa9joy7uAH1Q",
  authDomain: "my-chat-gpt-b49da.firebaseapp.com",
  projectId: "my-chat-gpt-b49da",
  storageBucket: "my-chat-gpt-b49da.appspot.com",
  messagingSenderId: "286060320220",
  appId: "1:286060320220:web:6e091a73aed22d139a2b19",
  measurementId: "G-5JG1GV3WN2"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };