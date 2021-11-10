import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from "../Components/Bottombar";
import ProgressCircle from "../Components/Progresscircle";
import LineChart from "../Components/Linechart";

//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function Stats({ navigation }) {



    return (

        <View style={{ marginBottom: 70 }}>
            {/* <Graph /> */}
            <ProgressCircle />
            {/* <LineChart /> */}


            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 55,
                fontSize: 24,
                fontWeight: "bold"
            }}>Statistiques Globales</Text>

            <Piechart />

        </View>
    );
}