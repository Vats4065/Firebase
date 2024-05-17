import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvYUiRcNr3dGAPsBdcw4FzV9HZ7i_gZMo",
  authDomain: "react-firebase-43ab3.firebaseapp.com",
  projectId: "react-firebase-43ab3",
  storageBucket: "react-firebase-43ab3.appspot.com",
  messagingSenderId: "536514502268",
  appId: "1:536514502268:web:3d648146f5365d4181f3f9",
  databaseURL: "https://react-firebase-43ab3-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

// connect app to firebase
