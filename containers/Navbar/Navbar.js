import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import COLORS from "../../constants/colors";

const logo = require("../../assets/icon.png");

function Navbar() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Covid Analyser</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: COLORS.light,
  },
  header: {
    marginLeft: 20,
    fontSize: 22,
  },
  logo: {
    height: 40,
    width: 40,
  },
});

export default Navbar;
