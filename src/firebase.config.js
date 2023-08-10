// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*

const firebaseConfig = {
  apiKey: "AIzaSyBOm4sm8rvHY9hJF-NAg61gsiB7EFtrEsw",
  authDomain: "autotrac-77317.firebaseapp.com",
  projectId: "autotrac-77317",
  storageBucket: "autotrac-77317.appspot.com",
  messagingSenderId: "213881391791",
  appId: "1:213881391791:web:09d6c4420ea70e2541a25a"
};


*/

// orig

const firebaseConfig = {
  apiKey: "AIzaSyCI8RSCscuLKRqO0J624xDBBFDVqaCjBb0",
  authDomain: "cars-project-6cf91.firebaseapp.com",
  projectId: "cars-project-6cf91",
  storageBucket: "cars-project-6cf91.appspot.com",
  messagingSenderId: "139507892748",
  appId: "1:139507892748:web:f163c6ecc29efa1c61e429",
  measurementId: "G-HF59JYNXXV"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)