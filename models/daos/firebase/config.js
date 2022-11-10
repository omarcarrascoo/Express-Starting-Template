const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require ('firebase/firestore/lite')

const firebaseConfig = {
  apiKey: "AIzaSyAxygKOp0epBADEe5j-ptnvmecVFetyE0g",
  authDomain: "curso-backend-b9c40.firebaseapp.com",
  projectId: "curso-backend-b9c40",
  storageBucket: "curso-backend-b9c40.appspot.com",
  messagingSenderId: "228727538774",
  appId: "1:228727538774:web:2297036dd4d7fd1029a7f7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

module.exports = db