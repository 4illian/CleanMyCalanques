import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Modal, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from './rootNavigation';
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}
export default function Map() {
  const [description, setDescription] = React.useState('');
  const [checkStyle, setCheckStyle] = React.useState('');
  const forceUpdate = useForceUpdate();

  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }

  const removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("destroy");
      return true;
    }
    catch (exception) {
      return false;
    }
  }
  const getData = async (index) => {
    try {
      const value = await AsyncStorage.getItem(index)
      if (value !== null) {
        setCheckStyle(true)
        console.log(value);
        useForceUpdate()
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }

  //removeItemValue("description")
  getData('description')

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    getData('description')
  });
  return (
    <View style={styles.container} >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.3333,
          longitude: 5.481,
          latitudeDelta: 0.4,
          longitudeDelta: 0.2,
        }}
      >
        {/* Marker 1 */}
        <MapView.Marker
          coordinate={{ latitude: 43.211985, longitude: 5.352530 }}
          title={"title"}
          description={"description"}
          //onCalloutPress={() => alert('Action de ramassage le 27/02/2022')}
          icon={require('../Assets/blue.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Les Goudes</Text>
              <Text style={{ textAlign: "center", fontSize: 13, fontStyle: "italic", fontWeight: "bold" }}>Organisé par {"\n"} Clean My Calanques </Text>
              <Text style={{ marginTop: 25, fontStyle: "italic", fontWeight: "bold" }}>15/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* Marker 2 */}
        <MapView.Marker
          coordinate={{ latitude: 43.272998, longitude: 5.362335 }}
          title={"title"}
          description={"description"}
          //onCalloutPress={() => alert('Action de ramassage le 27/02/2022')}
          icon={require('../Assets/blue.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Plages du Prophète</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Organisé par: {"\n"} Clean My Calanques</Text>
              <Text style={{ marginTop: 25, fontStyle: "italic", fontWeight: "bold" }}>20/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* MarkerCircle 1 */}
        <MapView.Circle
          center={{
            latitude: 43.178014,
            longitude: 5.388521,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"
          fillColor="rgba(137, 196, 244, 0.7)"
        />
        <MapView.Marker
          coordinate={{ latitude: 43.178014, longitude: 5.388521 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Nettoyage après un Dimanche</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Collecte de plusieurs déchets sur les plages alentours</Text>
              <Text style={{ marginTop: 8, fontStyle: "italic", fontWeight: "bold" }}>10/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* markerCircle 2 */}
        <MapView.Circle
          center={{
            latitude: 43.211181,
            longitude: 5.388291,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"
          fillColor="rgba(242, 38, 19, 0.4)"
        >
        </MapView.Circle>

        <MapView.Marker
          coordinate={{ latitude: 43.211181, longitude: 5.388291 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17, marginBottom: 5 }}>Calanques de Sormiou</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Filets de pêches en quantité sur les rochers</Text>
              <Text style={{ marginTop: 20, fontStyle: "italic", fontWeight: "bold" }}>9/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* markerCircle 3 */}
        <MapView.Circle
          center={{
            latitude: 43.203478,
            longitude: 5.493694,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"
          fillColor="rgba(242, 38, 19, 0.4)"
        >
        </MapView.Circle>

        <MapView.Marker
          coordinate={{ latitude: 43.203478, longitude: 5.493694 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17, marginBottom: 5 }}>Calanques de Port Pin</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Plusieurs déchets oubliés au abords de la calanque</Text>
              <Text style={{ marginTop: 20, fontStyle: "italic", fontWeight: "bold" }}>10/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* markerCircle 4 */}
        <MapView.Circle
          center={{
            latitude: 43.263841,
            longitude: 5.287409,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"
          fillColor="rgba(242, 38, 19, 0.4)"
        >
        </MapView.Circle>

        <MapView.Marker
          coordinate={{ latitude: 43.263841, longitude: 5.287409 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17, marginBottom: 5 }}>Dimanche île du frioul</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Plusieurs déchets échoué sur les plages de l'île</Text>
              <Text style={{ marginTop: 20, fontStyle: "italic", fontWeight: "bold" }}>9/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        {/* markerCircle 5 */}

        {/* markerCircle 5 */}
        <MapView.Circle
          center={{
            latitude: 43.267110,
            longitude: 5.460571,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"
          fillColor="rgba(242, 38, 19, 0.4)"
        >
        </MapView.Circle>

        <MapView.Marker
          coordinate={{ latitude: 43.269110, longitude: 5.460571 }}
          title={"title"}
          description={"description"}
          //onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
        >
          <MapView.Callout>
            <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17, marginBottom: 5 }}>Sacs de poubelles au parc</Text>
              <Text style={{ textAlign: "center", fontSize: 13 }}>Sacs de poubelles entassées</Text>
              <Text style={{ marginTop: 20, fontStyle: "italic", fontWeight: "bold" }}>10/11/2021</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>


        {/* /////// */}
        <MapView.Circle
          center={{
            latitude: 43.269788,
            longitude: 5.388521,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="transparent"

          fillColor={checkStyle ? "rgba(242, 38, 19, 0.4)" : "rgba(0,0,0,0)"}
        />
        <MapView.Marker
          coordinate={{ latitude: 43.269788, longitude: 5.388521 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
          icon={require('../Assets/light.png')}
          style={checkStyle ? { opacity: 1 } : { opacity: 0 }}
        >
          <MapView.Callout>
            <View>
              <View style={{ width: 200, height: 100, borderRadius: 25, flex: 1 }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>Nettoyage Post-Match Gagné</Text>

                <Text style={{ textAlign: "center", fontSize: 12 }}>Après la victoire de l'OM, nettoyage du stade avec le staff pendant 4h</Text>
                <Text style={{ marginTop: 13, fontStyle: "italic", fontWeight: "bold" }}>10/11/2021</Text>
                {/* <Image source={require('../Assets/user.png')} resizeMode='contain' tintColor='black' /> */}
              </View>
            </View>
          </MapView.Callout>
        </MapView.Marker>

      </MapView>


      <TouchableOpacity onPress={() => RootNavigation.navigate('Signalement')} style={{ position: 'absolute', bottom: 60, right: 10, width: 70, height: 70, zIndex: 2, backgroundColor: "rgba(50, 185, 187, 0.7)", padding: 15, borderRadius: 50, flex: 1, alignItems: "center" }} >
        <Image source={require('../Assets/camera.png')} resizeMode='contain' style={{ flex: 1, width: "100%" }} tintColor="white" />
        <Text style={{ color: "white" }}>Poster</Text>
      </TouchableOpacity>

      {/* 
      <TouchableOpacity onPress={() => RootNavigation.navigate('Signalement')} style={{ position: 'absolute', bottom: 60, right: 10, width: 70, height: 70, zIndex: 2, backgroundColor: "rgba(50, 185, 187, 0.7)", padding: 15, borderRadius: 50, flex: 1, alignItems: "center" }} >
        <Image source={require('../Assets/camera.png')} resizeMode='contain' style={{ flex: 1, width: "100%" }} tintColor="white" />
        <Text style={{ color: "white" }}>Poster</Text>
      </TouchableOpacity> */}


      {/* <View
      >
        <Text style={{
          marginTop: 100
        }}>
          Connexion
        </Text>

        <TextInput
          maxLength={256}
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          defaultValue={description}
          onChangeText={description => setDescription(description)}
          underlineColorAndroid="transparent"
          placeholderTextColor="#999"
        />


        <TouchableOpacity

          onPress={onPressLogin}
        >
          <Text style={{
            backgroundColor: "blue",
            padding: 10
          }}>ENREGISTRER</Text>
        </TouchableOpacity>



      </View> */}
      {/* <View style={styles.allNonMapThings}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=" Type some stuff!"
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.button} >
          <TouchableOpacity >
            <Text style={styles.buttonText} >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // height: 500,
  },
});