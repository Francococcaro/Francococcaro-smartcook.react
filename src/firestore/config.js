import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaBwoEBWrhuv31ixTLZHzR8bkX0NCBj8Y",
  authDomain: "curso-react-franco.firebaseapp.com",
  projectId: "curso-react-franco",
  storageBucket: "curso-react-franco.firebasestorage.app",
  messagingSenderId: "662846624853",
  appId: "1:662846624853:web:5cbdc46466348ae11d30dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);