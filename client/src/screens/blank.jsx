import React, { useState, useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Blank = ({ navigation: { navigate } }) => {
  return <View style={[styles.container, styles.horizontal]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Blank;
