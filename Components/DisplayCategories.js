import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import Categories from '../Helpers/categories.js'
import AudioPlayer from './AudioPlayer.js'
import Search from './Search.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ajouter from './Ajouter.js'

class DisplayCategories extends React.Component {
    render() {
        return(
            <View style={{justifyContent: 'center'}}>
                <FlatList
                    data = {Categories}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) =>
                        <View style={styles.button}>
                            <Button color="white" title={item.name} onPress={() =>
                                this.props.navigation.navigate('Search', {
                                    categorie: item.name
                                })}/>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 8,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 52,
        width: 250,
        backgroundColor: "#43BCFF",
        borderRadius: 15,
        justifyContent: 'center'
    }
});

export default DisplayCategories;
