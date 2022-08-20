import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {

        })
        .catch(error => {
            
        })
    };
};