import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Search from './Components/Search.js'
import Historique from './Components/Historique.js'
import Chrono from './Components/Chrono.js'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Chronomètre')
                            iconName = 'ios-stopwatch';
                        else if (route.name === 'Historique')
                            iconName = 'ios-stats';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#43BCFF',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Chronomètre" component={Chrono} />
                <Tab.Screen name="Historique" component={Historique} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
