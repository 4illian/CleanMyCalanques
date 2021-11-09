import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import MapView, { Marker, AnimatedRegion } from "react-native-maps";

export default function Map() {
  const state = {
    mapRegion: null,
    currentLatitude: null,
    currentLongitude: null,
    LATLNG: {
      latitude: -35,
      longitude: 120
    },
  }
  return (
    <View style={styles.container} >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -29.1482491,
          longitude: -51.1559028,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Circle
          center={{
            latitude: -29.1471337,
            longitude: -51.148951,
          }}
          radius={10000}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="#80bfff"
        />

        <MapView.Circle
          center={{
            latitude: -29.1471337,
            longitude: -50.148951,
          }}
          radius={1000}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="red"
        />

        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"title"}
          description={"description"}
          onCalloutPress={() => alert('Clicked')}
        >
          <MapView.Callout>
            <View>
              <Text>Click Me!</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
      </MapView>
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
    // height: Dimensions.get('window').height,
    height: 500,
  },
});