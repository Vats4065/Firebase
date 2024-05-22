import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASF1bamsX23RQ0Zel04ubQg0EKMAPjNZs",
  authDomain: "eshop-b9a0d.firebaseapp.com",
  projectId: "eshop-b9a0d",
  storageBucket: "eshop-b9a0d.appspot.com",
  messagingSenderId: "973311228851",
  appId: "1:973311228851:web:b20e2438282f559866e9c6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const provider = new GoogleAuthProvider(app);
export { app, provider };
