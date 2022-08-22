import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // google sign in
    const signInUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError("");

                // save or update user
                saveUser(user.email, user.displayName, "PUT");

                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // register user
    const registerNewUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError("");

                // save user data
                saveUser(email, name, "POST");

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch(() => { })
                navigate("/");
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setError("");
            })
            .catch(error => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${user.email}`)
        .then(res => setAdmin(res.data.admin));
    }, []);

    const saveUser = (email, name, method) => {
        const user = { email: email, displayName: name };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    };

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        admin,
        error,
        isLoading,
        signInUsingGoogle,
        registerNewUser,
        loginUser,
        logout
    }
};

export default useFirebase;