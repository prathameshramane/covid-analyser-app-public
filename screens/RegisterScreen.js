import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import { Screen } from "../components";
import { RegistrationForm } from "../containers";

const bgImage = require("../assets/Background-Image.png");

function RegisterScreen() {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.child}>
        <Screen style={styles.screen}>
          <RegistrationForm />
        </Screen>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
