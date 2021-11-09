import * as React from "react";
import { View, Text, Dimensions, Button } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from '../Components/Bottombar'
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function Home({ navigation }){




  return (
    <View
      style={{
     //   flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}

    >
      <Map />
      {/* <Map /> */}

      {/* <Button
        title="Go to Stats"
        
       onPress={() =>    
        navigation.navigate('Stats') }
      /> */}
    



      

    </View>
  );
}