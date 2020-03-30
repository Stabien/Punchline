import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Search from './Components/Search.js'
import Chrono from './Components/Chrono.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Chronomètre" component={Chrono} />
                <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
