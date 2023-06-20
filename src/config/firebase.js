
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAOW8WjlU4OtGiDHtvYtR5tVXvZtyX7zr0",
  authDomain: "tiktok-jornada-496fa.firebaseapp.com",
  projectId: "tiktok-jornada-496fa",
  storageBucket: "tiktok-jornada-496fa.appspot.com",
  messagingSenderId: "603045670562",
  appId: "1:603045670562:web:69d10c663ec522067f71fb"
};


const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export default db;