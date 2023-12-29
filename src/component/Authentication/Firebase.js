// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import"firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgL0UTSocRMqtxIu0p3Dnq4nGAOEpZzqU",
  authDomain: "clone-7d3c0.firebaseapp.com",
  projectId: "clone-7d3c0",
  storageBucket: "clone-7d3c0.appspot.com",
  messagingSenderId: "799313214211",
  appId: "1:799313214211:web:2c52813963550394470736",
  measurementId: "G-7X82RJBWKE"
};


// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth , db};
