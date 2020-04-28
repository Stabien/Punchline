import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cond: true,
            timer: 0,
            label_button: "Start",
            refresh: true,
        }
        this.centi_seconds = 0;
        this.deci_seconds = 0;
        this.seconds = 0;
        this.ten_seconds = 0;
        this.minutes = 0;
        this.ten_minutes = 0;
        this.hours = 0;
        this.ten_hours = 0;
    }
    set_right_time = () => {
        if (this.centi_seconds === 10) {
            this.centi_seconds = 0;
            this.deci_seconds = this.deci_seconds + 1;
        }
        if (this.deci_seconds === 10) {
            this.deci_seconds = 0;
            this.seconds = this.seconds + 1;
        }
        if (this.seconds === 10) {
            this.seconds = 0;
            this.ten_seconds = this.ten_seconds + 1;
        }
        if (this.ten_seconds === 6) {
            this.ten_seconds = 0;
            this.minutes = this.minutes + 1;
        }
        if (this.minutes === 10) {
            this.minutes = 0;
            this.ten_minutes = this.ten_minutes + 1;
        }
        if (this.ten_minutes === 6) {
            this.ten_minutes = 0;
            this.hours = this.hours + 1;
        }
        if (this.hours === 10) {
            this.hours = 0;
            this.ten_hours = this.ten_hours + 1;
        }
    }
    chrono_start = () => {
        if (this.state.cond === true) {
            this.setState({timer: setInterval(() => {
                this.set_right_time();
                this.setState({refresh: true});
                this.centi_seconds = this.centi_seconds + 1;
            }, 1000)
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
                    {this.ten_hours}{this.hours}:
                    {this.ten_minutes}{this.minutes}:
                    {this.ten_seconds}{this.seconds},
                    {this.deci_seconds}{this.centi_seconds}
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
