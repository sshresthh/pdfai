import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXx6LVL0hhIB3r7u4D6OAIbne9jxyUdj4",
  authDomain: "pdfai-sshresthh.firebaseapp.com",
  projectId: "pdfai-sshresthh",
  storageBucket: "pdfai-sshresthh.appspot.com",
  messagingSenderId: "376560166055",
  appId: "1:376560166055:web:b1987ff1c312a534e82782",
  measurementId: "G-7E9FJD793K",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
