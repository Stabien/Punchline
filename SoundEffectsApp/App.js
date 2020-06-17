import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from './Components/Search.js'
import Historique from './Components/Historique.js'
import Chrono from './Components/Chrono.js'
import DisplayCategories from './Components/DisplayCategories.js'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler';
import Home from './Components/Home.js'
import Ajouter from './Components/Ajouter.js'
import HeaderAjouter from './Components/HeaderAjouter.js'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} options={{title: "Home"}}/>
                <Tab.Screen name="Ajouter" component={HeaderAjouter} options={{title: "Ajouter"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
