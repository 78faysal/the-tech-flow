import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJ48sajtua99JW7X2RPUHDQid60r6KgQM",
  authDomain: "the-tech-flow.firebaseapp.com",
  projectId: "the-tech-flow",
  storageBucket: "the-tech-flow.appspot.com",
  messagingSenderId: "668200229182",
  appId: "1:668200229182:web:7f6af15d5f1916863e346f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export default auth;