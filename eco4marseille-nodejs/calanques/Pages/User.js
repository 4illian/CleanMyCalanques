import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from "../Components/Bottombar";
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function User({ navigation }) {



  return (
    <View
      style={{

        // justifyContent: "center",
        // alignItems: "center",
      }}

    >


        <Text>USER</Text>
      <Graph />



      

    </View>
  );
}