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

  const Create = () => {
    const docData = {
      firstName: "Aravind",
      lastName: "Krishna",
      email: "johndoe@gmail.com",
      password: "123456",
    };
    const NameCollectionRef = collection(db, "users");
    addDoc(NameCollectionRef, { docData })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => console.log(error.message));
  };
  //TODO: This is a placeholder for the HomeScreen.
  //TODO: Replace this with the actual HomeScreen.
  return (
    <View style={styles.container}>
      <Title>Home</Title>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Button onPress={Create}>Create</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default HomeScreen;
