import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import AuthContext from './contexts/auth';

const App = () => {
    return(
        <NavigationContainer>
            
            <AuthContext.Provider>

                <Routes />

            </AuthContext.Provider>

        </NavigationContainer>
    )
}

export default App;