import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Ajouter from './Ajouter.js'

class HeaderAjouter extends React.Component {
    render() {
        const Stack = createStackNavigator();

        return(
            <Stack.Navigator initialRouteName="Ajouter">
                <Stack.Screen name="Ajouter" component={Ajouter}/>
            </Stack.Navigator>
        )
    }
}

export default HeaderAjouter
