import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center' }
});

const Dashboard = () => {
    const { signOut, user } = useAuth();

    function handleSignOut(){
        signOut(); 
    }
    
    return(
        <View style={ styles.container } >

            <Text>{ user?.name }</Text>

            <Button title="Sign out" onPress={ handleSignOut } />

        </View>

    )
}

export default Dashboard;