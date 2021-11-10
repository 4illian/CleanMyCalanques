import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import {
    LineChart,
  } from "react-native-chart-kit";

export default function Graph() {
  return (
    <View
    
    >
        {/* <Text style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 22
        }}>Stats Globales</Text> */}
        <LineChart
          data={{
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
            datasets: [
              {
                data: [
                  Math.random() * 20,
                  Math.random() * 12,
                  Math.random() * 60,
                  Math.random() * 22,
                  Math.random() * 15,
                  Math.random() * 9
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}

          yAxisSuffix="kg"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#33babc",
            backgroundGradientFrom: "#33babc",
            backgroundGradientTo: "#33babc",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#1de8eb"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            // width: Dimensions.get("window").width/0.8,
            marginLeft: 20,
            marginRight: 20
          }}
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