import React,{ createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
    
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function LoadStorageData(){
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');
            
            if(storageUser && storageToken){
                api.defaults.headers['Authorization'] = `Bearer ${ storageToken }`

                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        LoadStorageData();
    }, [])

    async function signIn(){
        const response = await auth.signIn();

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${ response.token }`

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    function signOut(){
       AsyncStorage.clear().then(() => {
            setUser(null); 
       })
    }

    return(
        <AuthContext.Provider 
            value={{ signed: !!user, user, loading, signIn, signOut }} 
        >
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}