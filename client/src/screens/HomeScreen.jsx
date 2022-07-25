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
import { Title, Button } from "react-native-paper";
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
      <View>
        <Text>Email: {auth.currentUser?.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default HomeScreen;
