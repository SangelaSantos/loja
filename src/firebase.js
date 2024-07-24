import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// As configurações do Firebase do seu projeto
const firebaseConfig = {
    apiKey: "AIzaSyCPwDH2RPy7c5dT9mXPTNV3nKx6DIBXBYU",
    authDomain: "mini-loja-86b85.firebaseapp.com",
    projectId: "mini-loja-86b85",
    storageBucket: "mini-loja-86b85.appspot.com",
    messagingSenderId: "684169708008",
    appId: "1:684169708008:web:1eae614bff7069f833a45d",
    measurementId: "G-XT9VT4F338"
  };

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firebase Authentication e Database
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };