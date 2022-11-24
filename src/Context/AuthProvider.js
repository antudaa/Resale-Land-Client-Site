import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../Firebase/FirebaseConfig';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    // SignUp With Email & Password...
    const SignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login 
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Sign Out
    const SignOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // Create current user using useEffect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);


    // Update User 
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }



    const authInfo = {
        SignUp,
        Login,
        SignOut,
        user,
        updateUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;