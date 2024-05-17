import firebase from "firebase/compat/app";

import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyC7zFPc5c_4cOUEoU1UPEtxiqaByHqpqSo",
    authDomain: "react-conteact.firebaseapp.com",
    projectId: "react-conteact",
    storageBucket: "react-conteact.appspot.com",
    messagingSenderId: "769698628571",
    appId: "1:769698628571:web:42854905d89500d4ea9dfe",

};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();