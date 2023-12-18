// Import 
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signOut, signInWithEmailAndPassword} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC71Vxlp4gIE4sswnfHpuSdJ2Fx345_sk0",
  authDomain: "mantra-54151.firebaseapp.com",
  projectId: "mantra-54151",
  storageBucket: "mantra-54151.appspot.com",
  messagingSenderId: "391998901191",
  appId: "1:391998901191:web:cafb086fc2ab5231a0e7e2"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider()
export {signInWithEmailAndPassword}
