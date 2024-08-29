import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8vRP8qSy_tkLytyckUvhP7NxUOco4iOo",
  authDomain: "widistore-a2425.firebaseapp.com",
  projectId: "widistore-a2425",
  storageBucket: "widistore-a2425.appspot.com",
  messagingSenderId: "117056327880",
  appId: "1:117056327880:web:d6d7d182d9df322b6ed5fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='app'>
        <App />
    </div>
    
)
