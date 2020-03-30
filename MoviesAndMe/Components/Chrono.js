import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            centi_seconds: 0,
            deci_seconds: 0,
            seconds: 0,
            ten_seconds: 0,
            minutes: 0,
            ten_minutes: 0,
            hours: 0,
            ten_hours: 0,
            cond: true,
            timer: 0,
            label_button: "Start"
        }
    }
    set_right_time = () => {
        if (this.state.centi_seconds === 10) {
            this.setState({centi_seconds: 0});
            this.setState({deci_seconds: this.state.deci_seconds + 1});
        }
        if (this.state.deci_seconds === 10) {
            this.setState({deci_seconds: 0});
            this.setState({seconds: this.state.seconds + 1});
        }
        if (this.state.seconds === 10) {
            this.setState({seconds: 0});
            this.setState({ten_seconds: this.state.ten_seconds + 1});
        }
        if (this.state.ten_seconds === 6) {
            this.setState({ten_seconds: 0});
            this.setState({minutes: this.state.minutes + 1});
        }
        if (this.state.minutes === 10) {
            this.setState({minutes: 0});
            this.setState({ten_minutes: this.state.ten_minutes + 1});
        }
        if (this.state.ten_minutes === 6) {
            this.setState({ten_minutes: 0});
            this.setState({hours: this.state.hours + 1});
        }
        if (this.state.hours === 10) {
            this.setState({hours: 0});
            this.setState({ten_hours: this.state.ten_hours + 1});
        }
    }
    chrono_start = () => {
        if (this.state.cond === true) {
            this.setState({timer: setInterval(() => {
                this.setState({centi_seconds: this.state.centi_seconds + 1});
                this.set_right_time();
            }, 10)
        });
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
                <Text style={styles.text}>
                    {this.state.ten_hours}{this.state.hours}:
                    {this.state.ten_minutes}{this.state.minutes}:
                    {this.state.ten_seconds}{this.state.seconds},
                    {this.state.deci_seconds}{this.state.centi_seconds}
                </Text>
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
