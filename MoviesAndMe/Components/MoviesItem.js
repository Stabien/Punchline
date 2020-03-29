import React from 'react'
import {StyleSheet, View, Button, TextInput, Text} from 'react-native'
import Movies from '../Helpers/movies.js'

class MoviesItem extends React.Component {
    render() {
        const movies = this.props.movies;

        return(
            <View style={styles.main_container}>
                <View style={styles.image}></View>
                <View style={styles.info_container}>
                    <View style={styles.top_container}>
                        <Text style={styles.title}>{movies.title}</Text>
                        <Text style={styles.vote}>{movies.vote}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text>{movies.critique}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{movies.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        height: 190,
        marginTop: 5,
        marginLeft: 5,
        padding: 5
    },
    image: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000000'
    },
    info_container: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10
    },
    top_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title: {
        flex: 2
    },
    vote: {
        flex: 1,
        textAlign: 'right'
    },
    description_container: {
        flex: 7
    },
    date_container: {
        flex: 1,
        margin: 0
    },
    date_text: {
        textAlign: 'right',
        fontSize: 11
    }
});

export default MoviesItem
