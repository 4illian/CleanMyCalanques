import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    BarChart,
} from "react-native-chart-kit";

export default function Barchart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    return (

    <View style={styleSheet.MainContainer}>

<BarChart
  data={{
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{ data: [10, 20, 50, 40, 20] }],
  }}
  width={Dimensions.get('window').width - 10}
  height={230}
  yAxisLabel={'$ - '}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#458336',
    backgroundGradientTo: '#458336',
    decimalPlaces: 2,
    color: (opacity = 255) => '#ECEFF1',
    style: {
      borderRadius: 12, padding: 10
    },
  }}
/>

<Text style={{ fontSize: 28, textAlign: 'center' }}> Bar Chart in React Native </Text>

</View>
);
}

const styleSheet = StyleSheet.create({

MainContainer: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}

});