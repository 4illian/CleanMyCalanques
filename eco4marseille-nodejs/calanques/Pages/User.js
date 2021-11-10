import * as React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from "../Components/Bottombar";
import ProgressCircleProfil from "../Components/ProgressCircleProfil";
import ProgressCircleProfil2 from "../Components/ProgressCircleProfil2";
import ProgressCircleProfil3 from "../Components/ProgressCircleProfil3";
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function User({ navigation }) {

  return (
    <View>
      {/* <View style={{ }}> */}
      {/* <View style={{ alignItems: "center", marginTop: 55, paddingBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Profil
        </Text>
      </View> */}

      {/* </View> */}
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 75 }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Image source={{ "uri": "https://eu.ui-avatars.com/api/?name=ANAIS&length=2" }} style={{ width: 120, height: 120, borderRadius: 100 }} />
        </View>

        <View style={{ alignItems: 'center', flex: 0.8 }}>
          {/* <Image source={{"uri" : "https://eu.ui-avatars.com/api/?length=1"}} style={{ width: 150, height: 150, backgroundColor: "red", borderRadius: 100 }} /> */}
          <Text style={{ color: "black", width: 150, height: 22, marginTop: 30, fontWeight: "bold", fontSize: 22 }}>ANAÏS</Text>
          <Text style={{ color: "black", width: 150, height: 45, marginTop: 10, lineHeight: 20, fontSize: 16 }}>Compte crée le 10/11/2021</Text>
        </View>
      </View>


      <View style={{
        marginTop: 160,
        marginBottom: 25,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",

      }}>


        <ProgressCircleProfil />
        <ProgressCircleProfil2 />
        <ProgressCircleProfil3 />
        <Text style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 67,
          marginBottom: 20,
          position: "absolute",
          top: -24,
          right: 142,
          color: "white",
          zIndex: 4,
          textAlign: "center"
        }}>+120Kgs{"\n"}ramassés</Text>


        <Text style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 67,
          marginBottom: 20,
          position: "absolute",
          top: -34,
          right: 287,
          color: "white",
          zIndex: 4,
          textAlign: "center"
        }}>14{"\n"}posts</Text>


        <Text style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 67,
          marginBottom: 20,
          position: "absolute",
          top: -34,
          left: 287,
          color: "white",
          zIndex: 4,
          textAlign: "center"
        }}>31{"\n"}aides</Text>

        {/*             
            <Text style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: "bold",
                fontSize: 33, 
                marginTop: 67,
                marginBottom: 20,
                position: "absolute",
                top: 174,
                right: 145,
                color: "white"
            }}>94%</Text> */}

        {/* 
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          En résumé
        </Text>

        <Text style={{ fontSize: 16, fontStyle: "italic", fontWeight: "bold", marginLeft: "auto", marginRight: "auto", marginTop: 10 }}>
          Depuis janvier 2021, ANAÏS a :
        </Text>

        <Text style={{ fontSize: 16, marginLeft: "auto", marginRight: "auto", marginTop: 10 }}>
          Nettoyé 12 dépots sauvages
        </Text>

        <Text style={{ fontSize: 16, marginLeft: "auto", marginRight: "auto", marginTop: 10 }}>
          Récolté plus de 120kg de déchets !
        </Text>


        */}
      </View>




      <View style={{ width: Dimensions.get("window").width, alignItems: "center", marginTop: 140 }}>
        <Graph />
      </View>

    </View>
  );
}