import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput, Title, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../firebase_init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { db } from "../../firebase_init";
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

const SignInScreen = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("HomeTab");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      async (userCredentials) => {
        const user = userCredentials.user;
        const NameCollectionRef = collection(db, "users");
        const q = query(NameCollectionRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const user_id = data.user_id;
          console.log(user_id);
        });
        navigate("HomeTab");
      }
    );
  };

  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Title style={{ marginTop: 100, fontSize: 30, alignSelf: "center" }}>
            Sign in to [insert name here]
          </Title>
          <Image
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              marginTop: 20,
            }}
            source={{
              uri: "https://hershey-montessori.org/wp-content/uploads/2020/03/facebook-logo.png",
            }}
          />
          <TextInput
            style={{ marginTop: 20, width: 300, alignSelf: "center" }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            left={
              <TextInput.Icon
                name={() => <Ionicons name="mail-outline" size={25} />}
              />
            }
            label={"Email"}
            mode="outlined"
            theme={{
              roundness: 20,
              colors: {
                primary: "#3c65a0",
                underlineColor: "transparent",
              },
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={{ marginTop: 20, width: 300, alignSelf: "center" }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            keyboardType="email-address"
            left={
              <TextInput.Icon
                name={() => <Ionicons name="key-outline" size={25} />}
              />
            }
            label={"Password"}
            mode="outlined"
            theme={{
              roundness: 20,
              colors: {
                primary: "#3c65a0",
                underlineColor: "transparent",
              },
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            mode="text"
            onPress={() => navigate("Sign Up")}
            labelStyle={{ color: "#3c65a0" }}
          >
            Need an account? Sign up instead
          </Button>
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "#3c65a0",
              width: 200,
              alignSelf: "center",
            }}
            mode={"contained"}
            onPress={() => handleLogin()}
          >
            Sign in
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default SignInScreen;
