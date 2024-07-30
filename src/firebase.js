import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, update, remove } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCPwDH2RPy7c5dT9mXPTNV3nKx6DIBXBYU",
    authDomain: "mini-loja-86b85.firebaseapp.com",
    projectId: "mini-loja-86b85",
    storageBucket: "mini-loja-86b85.appspot.com",
    messagingSenderId: "684169708008",
    appId: "1:684169708008:web:1eae614bff7069f833a45d",
    measurementId: "G-XT9VT4F338"
};

const app = initializeApp(firebaseConfig); // Inicializa o Firebase com a configuração fornecida
const auth = getAuth(app); // Inicializa o serviço de autenticação do Firebase
const database = getDatabase(app); // Inicializa o serviço de banco de dados em tempo real do Firebase
const storage = getStorage(app); // Inicializa o serviço de armazenamento do Firebase
const db = getFirestore(app); // Inicializa o serviço de Firestore do Firebase (banco de dados NoSQL)

export { app, auth, database, db, ref, push, storage, onValue, set, update, remove };
