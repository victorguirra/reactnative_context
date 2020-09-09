import React,{ createContext, useState } from 'react'
import { useAsyncStorage } from '@react-native-community/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
    
    const [ user, setUser ] = useState(null);

    async function signIn(){
        const response = await auth.signIn();

        setUser(response.user);
    }

    function signOut(){
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }} >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;