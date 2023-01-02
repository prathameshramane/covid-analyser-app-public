import React from "react";
import { TextInput as RNTextInput, View, StyleSheet, Text } from "react-native";

import COLORS from "../../constants/colors";

function TextInput({ style, label, ...restProps }) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, style]}>
        <RNTextInput {...restProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.75,
    borderColor: COLORS.black,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TextInput;
