import * as React from "react";
import { useState } from "react";
import { View, Text, Dimensions, Button, TextInput, TouchableOpacity } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
import Bottombar from '../Components/Bottombar'

import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

export default function Signalement({ navigation }) {
    "Nettoyage Post-Match Gagné"
    const [description, setDescription] = useState("Après la victoire de l'OM, nettoyage du stade avec le staff pendant 4h")
    // const [password, setPassword] = useState("")

    const [title, setTitle] = useState("Nettoyage Post-Match Gagné")
    const getData = async (index) => {
        try {
            const value = await AsyncStorage.getItem(index)
            if (value !== null) {

                console.log("kzjhfjbijfb");
                console.log(value);
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    }

    const storeData = async (value, index) => {
        try {
            await AsyncStorage.setItem(index, value)
            console.log(value);
            getData(index)
        } catch (e) {
            // saving error
            console.log(e);
        }
    }

    async function onPressLogin() {
        storeData(description, "description")

    }
    return (
        <View
            style={{ alignItems: "center" }}
        >
            <Text style={{
                marginTop: 200,
                marginBottom: 30,
                fontSize: 17,
                fontWeight: "bold"
            }}>
                Description des objets trouvés
            </Text>

            <TextInput

                maxLength={256}
                placeholder="Titre"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                defaultValue={title}
                onChangeText={title => setTitle(title)}
                // onChange={(e) => handleChange(setEmail, e)}
                // onSubmitEditing={event =>
                // //   this.passwordInput.wrappedInstance.focus()
                // }
                // onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
                style={{ borderWidth: 1, height: 40, borderRadius: 3, width: 210, padding: 5 }}
            />



            <TextInput
                multiline={true}
                numberOfLines={5}
                maxLength={256}
                placeholder="Description"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                defaultValue={description}
                onChangeText={description => setDescription(description)}
                // onChange={(e) => handleChange(setEmail, e)}
                // onSubmitEditing={event =>
                // //   this.passwordInput.wrappedInstance.focus()
                // }
                // onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
                style={{ borderWidth: 1, height: 100, maxWidth: '80%', marginTop: 5, borderRadius: 3, padding: 5 }}
            />

            <TextInput

                maxLength={256}
                placeholder="Description"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                defaultValue={"10/11/2021"}
                onChangeText={description => setDescription(description)}
                // onChange={(e) => handleChange(setEmail, e)}
                // onSubmitEditing={event =>
                // //   this.passwordInput.wrappedInstance.focus()
                // }
                // onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
            />


            {/* <TextInput
                // ref={node => {
                //   this.passwordInput = node;
                // }}
                // style={styles.input}
                //value={password}
                maxLength={40}
                placeholder="Mot de passe"
                // onChangeText={this.onPasswordChange}
                defaultValue={password}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                onChangeText={password => setPassword(password)}
                //onSubmitEditing={(e) => setFormData({ ...formData, email: e.target.value })}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
            /> */}


            <TouchableOpacity

                onPress={onPressLogin}
            >
                <Text style={{
                    backgroundColor: "#32b9bb",
                    padding: 10,
                    textAlign: "center",
                    width: 150,
                }}>ENREGISTRER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { formDescription: "Nettoyage Post-Match Gagné" })} style={{ width: "20%", alignItems: 'center' }} >
                <Text resizeMode='contain' style={{
                    width: 150,
                    borderStyle: "solid",
                    textAlign: 'center',
                    textDecorationLine: "underline",
                    marginTop: 10
                }}>Revenir à la map</Text>
            </TouchableOpacity>



        </View>
    );
}