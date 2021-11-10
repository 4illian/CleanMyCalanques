import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import Stats from "../Pages/Stats";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import User from "../Pages/User";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bottombar from '../Components/Bottombar'
import { navigationRef } from './rootNavigation';
import Signalement from '../Pages/Signalement';


const Stack = createStackNavigator();


export default function StackScreen() {

  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator style={{flex:1}}>
      <Stack.Screen name="Home" options={{headerShown: false}}>
      {props => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen name="User" options={{headerShown: false}} >
      {props => <User {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{headerShown: false}} >
      {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Stats" options={{headerShown: false}} >
      {props => <Stats {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signalement" options={{headerShown: false}} >
      {props => <Signalement {...props} />}
        </Stack.Screen>
      {/* <Stack.Screen name="Stats" component={Stats} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="Signalement" component={Signalement} options={{headerShown: false}} /> */}

    </Stack.Navigator>
    </NavigationContainer>
  );

}
