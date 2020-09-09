import React,{ createContext } from 'react'
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
    
    async function signIn(){
        const response = await auth.signIn();

        console.log(response);
    }

    return(
        <AuthContext.Provider value={{ signed: false, user: {}, signIn }} >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;