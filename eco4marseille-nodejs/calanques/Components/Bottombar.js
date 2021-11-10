import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import StatsImg from "../Assets/stats.png"
import * as RootNavigation from './rootNavigation';

export default function Bottombar({ navigation }) {

    return (
        <View style={{
            flex: 1,
            position: 'absolute', left: 0, right: 0, bottom: 0,
            backgroundColor: '#32b9bb',
            flexDirection: 'row',
            height: 75,
            alignItems: 'center',
        }}>

            <View style={{ width: "35%", alignItems: 'center' }} >
                <Image source={require('../Assets/cmc.png')} resizeMode='contain' style={{ flex: .8 }} tintColor="white" />
            </View>

            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')} style={{ width: "18%", alignItems: 'center' }} >
                <Image source={require('../Assets/home.png')} resizeMode='contain' style={{ flex: .5 }} tintColor="white" />
                <Text style={{ color: "white" }}>Accueil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => RootNavigation.navigate('Stats')} style={{ width: "24%", alignItems: 'center' }} >
                <Image source={require('../Assets/commu.png')} resizeMode='contain' style={{ flex: .5 }} tintColor="white" />
                <Text style={{ color: "white" }}>Communauté</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => RootNavigation.navigate('User')} style={{ width: "18%", alignItems: 'center' }} >
                <Image source={require('../Assets/user.png')} resizeMode='contain' style={{ flex: .5, width: "100%" }} tintColor="white" />
                <Text style={{ color: "white" }}>Profil</Text>
            </TouchableOpacity>

        </View>
    );
}
