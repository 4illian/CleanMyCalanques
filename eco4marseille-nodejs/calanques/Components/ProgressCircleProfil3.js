import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    ProgressChart,
} from "react-native-chart-kit";

export default function ProgressCircleProfil3() {

    const data = {
        labels: [""],
        data: [0.78]
    };


    return (
        <View>
           
            <ProgressChart
                data={data}
                width={Dimensions.get("window").width / 3.5}
                height={105}
                strokeWidth={10}
                radius={35}
                style={{ borderRadius: 25,
                marginLeft: "0%"}}
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