import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0pb3HZTOzlhgLW8Gu-JxtMEj3zrPwdG8",
    authDomain: "disenoappwebmoviles.firebaseapp.com",
    projectId: "disenoappwebmoviles",
    storageBucket: "disenoappwebmoviles.appspot.com",
    messagingSenderId: "936171985199",
    appId: "1:936171985199:web:00a6754cf94ff7d991e9da",
    measurementId: "G-Y0ZJM96P2L"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage();

export default app;
export { db, storage };