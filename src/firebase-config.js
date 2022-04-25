import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCWGqIXH7hrBL5M1w0PyfKPRjfQFSIqA_E",
  authDomain: "amaru-4fef9.firebaseapp.com",
  projectId: "amaru-4fef9",
  storageBucket: "amaru-4fef9.appspot.com",
  messagingSenderId: "129617552619",
  appId: "1:129617552619:web:dfd1bc4df22c9b07becaae"
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)