import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSM3pBVxeeoxsxm6atw91A7I-ewKiecP0",
  authDomain: "fir-auth-bdf23.firebaseapp.com",
  projectId: "fir-auth-bdf23",
  storageBucket: "fir-auth-bdf23.firebasestorage.app",
  messagingSenderId: "72096450829",
  appId: "1:72096450829:web:7264c03f6cc1abb95d4844",
  measurementId: "G-2894DEF06T"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
