import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDx7nzokZ83X85hCCxirQDIsMi8QmYqv10",
  authDomain: "portfolio-9b4d1.firebaseapp.com",
  projectId: "portfolio-9b4d1",
  storageBucket: "portfolio-9b4d1.appspot.com",
  messagingSenderId: "1055870251828",
  appId: "1:1055870251828:web:cc872363e8bf99dbcd6b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};