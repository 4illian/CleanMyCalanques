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


export default function Login({ navigation }, data) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)

        } catch (e) {
            // saving error
            console.log(e);
        }
    }

    async function onPressLogin() {

        axios.post('http://192.168.17.205:8080/login', {
            "email": email,
            "password": password
        })
            .then((response) => {

                storeData(response.data.token)

            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <View
        >
            <Text style={{
                marginTop: 200
            }}>
                Connexion
            </Text>

            <TextInput
                maxLength={256}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                defaultValue={email}
                onChangeText={email => setEmail(email)}
                // onChange={(e) => handleChange(setEmail, e)}
                // onSubmitEditing={event =>
                // //   this.passwordInput.wrappedInstance.focus()
                // }
                // onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
            />


            <TextInput
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
            />


            <TouchableOpacity

                onPress={onPressLogin}
            >
                <Text style={{
                    backgroundColor: "blue",
                    padding: 10
                }}>LOGIN</Text>
            </TouchableOpacity>



        </View>
    );
}