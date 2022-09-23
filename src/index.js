import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAPBPNdVwgXlPf_hrXC0HBe4oHTHm1mnL4",
  authDomain: "drex-ecommerce-34f1f.firebaseapp.com",
  projectId: "drex-ecommerce-34f1f",
  storageBucket: "drex-ecommerce-34f1f.appspot.com",
  messagingSenderId: "773113084818",
  appId: "1:773113084818:web:7f00314ab5bc50163f9f4b"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
