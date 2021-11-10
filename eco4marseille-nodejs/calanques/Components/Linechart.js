import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";

export default function Linechart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    return (
        <View>
            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 22
            }}>Stats Globales</Text>
            <LineChart
                data={data}
                width={Dimensions.get("window").width/1.1}
                height={200}
                chartConfig={chartConfig}
                style={{borderRadius: 25}}
            />
        </View>
    );
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146,  ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};