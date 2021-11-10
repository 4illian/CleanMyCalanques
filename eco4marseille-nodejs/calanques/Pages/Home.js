import * as React from "react";
import { View, Text, Dimensions, Button, TouchableOpacity, Image } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from '../Components/Bottombar'
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function Home({ navigation }) {




  return (
    <View
      style={{ position: 'absolute', zIndex: 0 }}

    >
      <Map style={{ zIndex: 1 }} />



     


      {/* <TouchableOpacity onPress={() => navigation.navigate('User')} style={{ position: 'absolute', top: 60, right: 10, width: 55, height: 55, zIndex: 2, backgroundColor: "rgba(50, 185, 187, 0.7)", padding: 15, borderRadius: 50, flex: 1, alignItems: "center" }} >
        <Image source={require('../Assets/list.png')} resizeMode='contain' style={{ flex: 1, width: "100%" }} tintColor="white" />
        <Text style={{ color: "white", fontSize: 10 }}>Liste</Text>
      </TouchableOpacity> */}
      {/* <Map /> */}

      {/* <Button
        title="Go to Stats"
        
       onPress={() =>    
        navigation.navigate('Stats') }
      /> */}






    </View>
  );
}