import React from "react";
import ReactDOM from "react-dom/client";

import"./index.css";
import App from "./App";

import { doc, getDoc } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIYOa73JdDgDl7mCNKarvoj0MNhXgolyM",
  authDomain: "dans-d2455.firebaseapp.com",
  projectId: "dans-d2455",
  storageBucket: "dans-d2455.appspot.com",
  messagingSenderId: "209322027641",
  appId: "1:209322027641:web:d069a14a72b519671642a8",
  measurementId: "G-T267DEMNB6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

function TESTgetItemsFromDataBase(){
const productosColectionRef = (db, "productos")
getDoc(productosColectionRef).then( respuesta => {
console.log(respuesta);
console.log(respuesta.docs)
})
console.log(productosColectionRef) 
console.log(getDoc(productosColectionRef));
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
