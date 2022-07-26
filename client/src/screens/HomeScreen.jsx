import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { Title, Button, Searchbar } from "react-native-paper";
import { db, auth } from "../../firebase_init";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation: { navigate } }) => {
  // const Create = () => {
  //   const myDoc = doc(db, "users", "user1");
  //   const docData = {
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     password: "123456",
  //   };
  //   setDoc(myDoc, docData)
  //     .then(() => {
  //       console.log("Document created");
  //     })
  //     .err((err) => {
  //       console.log(err);
  //     });
  // };
  //TODO: This is a placeholder for the HomeScreen.
  //TODO: Replace this with the actual HomeScreen.
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.stuff}>
        <Searchbar style={styles.searchbar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
  searchbar: {
    width: "90%",
    marginTop: "5%",
  },
  stuff: {
    marginTop: 30,
  },
});

export default HomeScreen;
