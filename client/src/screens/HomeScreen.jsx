import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Title, Button } from "react-native-paper";
import { db } from "../../firebase_init";

const HomeScreen = ({ navigation: { navigate } }) => {
  const Create = () => {
    const myDoc = doc(db, "users", "user1");
    const docData = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      password: "123456",
    };
    setDoc(myDoc, docData)
      .then(() => {
        console.log("Document created");
      })
      .err((err) => {
        console.log(err);
      });
  };
  //TODO: This is a placeholder for the HomeScreen.
  //TODO: Replace this with the actual HomeScreen.
  return (
    <View>
      <Title>Home</Title>
      <Button onPress={Create}>Create</Button>
    </View>
  );
};

export default HomeScreen;
