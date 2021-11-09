import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import StatsImg from "../Assets/stats.png"
import * as RootNavigation from './rootNavigation';

export default function Bottombar({ navigation }) {
   
    return (
        <View style={{
            flex: 1,
            position: 'absolute', left: 0, right: 0, bottom: 0,
             // a regler
            backgroundColor: '#32b9bb',
            flexDirection: 'row',
            height: 80,
            alignItems: 'center',
        }}>
  
                <View style={{width: "35%", alignItems: 'center'}} >
                    <Image source={require('../Assets/cmc.png')} resizeMode='contain' style={{ flex: .7 }} tintColor="white" />
                </View>

                <TouchableOpacity onPress={() => RootNavigation.navigate('Home')} style={{width: "20%", alignItems: 'center'}} >
                    <Image source={require('../Assets/home.png')} resizeMode='contain' style={{ flex: .3 }} tintColor="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => RootNavigation.navigate('Stats')} style={{width: "20%", alignItems: 'center'}} >
                    <Image source={require('../Assets/stats.png')} resizeMode='contain' style={{ flex: .3 }} tintColor="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => RootNavigation.navigate('User')} style={{width: "20%", alignItems: 'center'}} >
                    <Image source={require('../Assets/user.png')} resizeMode='contain' style={{ flex: .3, width: "100%" }} tintColor="white" />
                </TouchableOpacity>

        </View>
    );
}
