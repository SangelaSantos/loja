import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, update, remove } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); 
const storage = getStorage(app);
const db = getFirestore(app); 

export { app, auth, database, db, ref, push, storage, onValue, set, update, remove };
