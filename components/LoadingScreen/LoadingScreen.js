import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
});
