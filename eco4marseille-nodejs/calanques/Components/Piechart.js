import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    PieChart,
} from "react-native-chart-kit";

export default function Piechart() {
    const data = [
        {
            name: "Marseille",
            polution: 215,
            color: "#cb9847",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Paris",
            polution: 280,
            color: "#8ecb47",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Vaeurs",
            polution: 280,
            color: "#cb5047",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Valeur2",
            polution: 400,
            color: "#3b4ccb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Valeur3",
            polution: 76,
            color: "#bc3bcb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        
    ];
    return (
        <View>
            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 22
            }}>Stats Globales</Text>
            <PieChart
                data={data}
                width={Dimensions.get("window").width/1.1}
                height={200}
                chartConfig={chartConfig}
                accessor={"polution"}
                backgroundColor={"transparent"}
            style={{borderRadius: 25}}
                //paddingLeft={"15"}
                center={[0, 0]}
                absolute
            />
        </View>
    );
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};