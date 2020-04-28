import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import Sounds from '../Helpers/sounds.js'
import { Audio } from 'expo-av'
import AudioPlayer from './AudioPlayer.js'

class Search extends React.Component {
    render() {
        const numColumns = 2;
        const name = this.props.route.params.categorie;

        Audio.setAudioModeAsync({playsInSilentModeIOS: true});
        return(
            <View style={{marginTop: 30}}>
                <TextInput placeholder="Titre du film" style={styles.textinput}/>
                <Button title="Rechercher" onPress={() => {}} style={{height: 50}}/>
                <FlatList
                    data = {Sounds}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => {
                        if (item.categorie === name)
                            return <AudioPlayer style={styles.button} sounds={item}/>
                    }}
                    numColumns = {numColumns}
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
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
        height: 35,
        borderColor: '#222222',
        borderWidth: 1,
        paddingLeft: 5
    }
});

export default Search
