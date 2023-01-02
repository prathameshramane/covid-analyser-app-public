import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import COLORS from "../../constants/colors";

function Button({ onPress, style, text, ...restProps }) {
  return (
    <TouchableOpacity onPress={onPress} {...restProps}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default Button;
