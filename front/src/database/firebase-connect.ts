import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg8lrdaSQKwdTjXyxZNBWqTEu4XPEzQM8",
  authDomain: "discord-clone-85fa1.firebaseapp.com",
  projectId: "discord-clone-85fa1",
  storageBucket: "discord-clone-85fa1.appspot.com",
  messagingSenderId: "57706170526",
  appId: "1:57706170526:web:6b93f078f188836d4c138f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }