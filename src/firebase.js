import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCB3NaX-CBUV_RpyH9od1vl6zL4XL_pGho",
    authDomain: "todo-app-dg322.firebaseapp.com",
    projectId: "todo-app-dg322",
    storageBucket: "todo-app-dg322.appspot.com",
    messagingSenderId: "976684125536",
    appId: "1:976684125536:web:f80843e3b598e3cdf16205"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };