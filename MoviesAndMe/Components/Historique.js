import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

class Historique extends React.Component {
    render() {
        return(
            <BarChart
                style={styles.graph}
                width={screenWidth - 50}
                data={data}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        )
    }
}
const styles = StyleSheet.create({
        graph: {
            alignItems: 'center',
            marginTop: Dimensions.get("window").height / 2 - 110
        }
})

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
        data: [20, 45, 28, 80, 99, 43]
    }]
};

export default Historique
