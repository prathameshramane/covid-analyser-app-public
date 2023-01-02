import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import { Screen } from "../components";
import { LoginForm } from "../containers";

const bgImage = require("../assets/Background-Image.png");

function LoginScreen() {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.child}>
        <Screen style={styles.screen}>
          <LoginForm />
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

export default LoginScreen;
