import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import Movies from '../Helpers/movies.js'
import MoviesItem from './MoviesItem.js'

class Search extends React.Component {
    render() {
        return(
            <View style={{marginTop: 30}}>
                <TextInput placeholder="Titre du film" style={styles.textinput}/>
                <Button title="Rechercher" onPress={() => {}} style={{height: 50}}/>
                <FlatList
                    data = {Movies}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => <MoviesItem movies={item}/>}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#222222',
        borderWidth: 1,
        paddingLeft: 5
    }
});

export default Search
