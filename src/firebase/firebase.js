
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCL12xIZmVXhexqMonVwmTdK25-lz4GqS0",
  authDomain: "insta-clone-firebase-5747e.firebaseapp.com",
  projectId: "insta-clone-firebase-5747e",
  storageBucket: "insta-clone-firebase-5747e.appspot.com",
  messagingSenderId: "751497058685",
  appId: "1:751497058685:web:fa5fd31b593e8196ff9414",
  measurementId: "G-C4NTTZPPWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);
export {app,auth,firestore,storage};