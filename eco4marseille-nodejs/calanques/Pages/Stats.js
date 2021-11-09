import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from "../Components/Bottombar";
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function Stats({ navigation }) {



    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: "center",
            // alignItems: "center",
        }}>

            <View style={{ marginBottom: 50 }}>
                <Text >coucou</Text>
            </View>

            <View>
                <Graph />

            </View>

            <View style={{

                // justifyContent: "center",
                // alignItems: "center",
            }}
            >
                <Piechart />
            </View>
        </View>
    );
}