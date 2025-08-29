import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd9svqXwl3WUKReqhtbyDtc5s_TlBQX8w",
  authDomain: "goalproject-cal.firebaseapp.com",
  projectId: "goalproject-cal",
  storageBucket: "goalproject-cal.firebasestorage.app",
  messagingSenderId: "939445587655",
  appId: "1:939445587655:web:2773b4b941d56b4672b8e2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)