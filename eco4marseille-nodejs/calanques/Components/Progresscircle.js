import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    ProgressChart,
} from "react-native-chart-kit";

export default function ProgressCircle() {

    const data = {
        labels: [""],
        data: [0.94]
    };


    return (
        <View>
            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 65,
                marginBottom: 10
            }}>Objectif Hebdomadaire</Text>
            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 35
            }}>94Kg / 100Kg déjà ramassé !</Text>

            <ProgressChart
                data={data}
                width={Dimensions.get("window").width / 1.1}
                height={200}
                strokeWidth={14}
                radius={64}
                style={{
                    borderRadius: 25,
                    marginLeft: "5%"
                }}
                chartConfig={chartConfig}
                hideLegend={true}
            />

            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: "bold",
                fontSize: 33,
                marginTop: 67,
                marginBottom: 20,
                position: "absolute",
                top: 174,
                right: 145,
                color: "white"
            }}>94%</Text>

        </View>
    );
}

const chartConfig = {
    backgroundGradientFrom: "#32b9bb",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#32b9bb",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};