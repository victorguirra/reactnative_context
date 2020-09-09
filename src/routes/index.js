import React, { useContext } from 'react';

import AuthContext from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
    const { signed } = useContext(AuthContext);

    console.log( signed );

    return signed === true ? <AppRoutes /> : <AuthRoutes />  ;
}

export default Routes;