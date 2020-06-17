import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Audio } from 'expo-av'
import Sounds from '../Helpers/sounds.js'

class AudioPlayer extends React.Component {
    render() {
        const sounds = this.props.sounds;

        Audio.setAudioModeAsync({playsInSilentModeIOS: true});
        return(
            <View style={styles.button}>
                <Button color="#FFFFFF" title={sounds.title} onPress={async () => {
                    const soundObject = new Audio.Sound();
                    try {
                        await soundObject.loadAsync(sounds.adresse);
                        soundObject.playAsync();
                    }
                    catch(error) {

                    }
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 40,
        width: 130,
        backgroundColor: "#43BCFF",
        borderRadius: 15,
        justifyContent: 'center'
    }
});

export default AudioPlayer
