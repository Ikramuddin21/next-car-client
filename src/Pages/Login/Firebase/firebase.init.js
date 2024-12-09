import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);

  console.log(firebaseConfig, "firebase config");
};

export default initializeAuthentication;
