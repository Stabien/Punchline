import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            cond: true,
            timer: 0,
            label_button: "Start"
        }
    }

    chrono_start = () => {
        if (this.state.cond === true) {
            this.setState({timer: setInterval(() => {
                this.setState({count: this.state.count + 1});
            }, 1000)});
            this.setState({cond: false});
            this.setState({label_button: "Stop"});
        } else {
            clearInterval(this.state.timer);
            this.setState({cond: true});
            this.setState({label_button: "Start"});
        }
    }

    render() {
        return(
            <View style={styles.views}>
                <Text style={styles.text}>{this.state.count}</Text>
                <Button title={this.state.label_button} color="black" onPress={this.chrono_start} style={styles.buttons}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        borderWidth: 20,
        borderColor: '#000000'
    },
    views: {
        flexDirection: 'column',
        marginTop: 200
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
});

export default Chrono
