import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import Button from "../Button";

export default function Alert({
  isVisible,
  setIsVisible,
  success = true,
  message = "Successful",
}) {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        {success ? (
          <LottieView
            autoPlay
            loop={false}
            source={require("../../assets/animations/check.json")}
            style={styles.animation1}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../../assets/animations/fail.json")}
            style={styles.animation2}
          />
        )}

        <Text style={styles.text}>{message}</Text>
        <Button
          text={"Ok"}
          style={styles.button}
          onPress={() => setIsVisible(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.70);",
    zIndex: 1,
  },
  animation1: { width: 125 },
  animation2: { width: 100, padding: 5, marginBottom: 10 },
  text: {
    fontSize: 16,
    fontWeight: "200",
  },
  button: { paddingHorizontal: 30 },
  modal: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
