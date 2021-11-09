import * as React from "react";
import { View, Text } from "react-native";
import Stats from "./Pages/Stats";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Stackscreen from "./Components/Stackscreen"
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bottombar from './Components/Bottombar'

export default function App() {
  return (
<View
   style={{
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  }}>
  <Stackscreen />

 
<Bottombar />

  </View>

  );
};