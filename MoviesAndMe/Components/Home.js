import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Categories from '../Helpers/categories.js'
import AudioPlayer from './AudioPlayer.js'
import Search from './Search.js'
import { createStackNavigator } from '@react-navigation/stack'
import DisplayCategories from './DisplayCategories.js'
import Ajouter from './Ajouter.js'
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();

class Home extends React.Component {
    render() {
        return(
            <Stack.Navigator initialRouteName="Catégorie">
                <Stack.Screen name="Home" component={DisplayCategories}/>
                <Stack.Screen name="Search" component={Search} options={({route}) => ({title: route.params.categorie})}/>
            </Stack.Navigator>
        )
    }
}

export default Home
