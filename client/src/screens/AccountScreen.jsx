import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Title, Button } from "react-native-paper";
import { auth } from "../../firebase_init";
import { signOut } from "firebase/auth";

const AccountScreen = ({ navigation: { navigate } }) => {
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        navigate("Sign In");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Title>Account</Title>
      <Button onPress={SignOut()}>Sign out</Button>
    </View>
  );
};

export default AccountScreen;
