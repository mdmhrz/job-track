import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true)

    // for Register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For signIn with google Popup

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // for observe logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, []);


    // for logout user
    const logOut = () => {
        return signOut(auth)
    }

    // for login user

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // For user update
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    };



    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;