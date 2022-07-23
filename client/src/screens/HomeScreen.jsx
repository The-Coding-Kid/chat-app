import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Title, Button } from "react-native-paper";
import {db} from "../firebase_init";
import { doc, setDoc } from 'firebase/firestore';

const HomeScreen = ({ navigation: { navigate } }) => { 
    const Create = () => {
        const myDoc = doc(db, "users", "user1");
    }
    //TODO: This is a placeholder for the HomeScreen.
    //TODO: Replace this with the actual HomeScreen.
    return (
        <View>
            <Title>Home</Title>
        </View>
    )
}

export default HomeScreen;