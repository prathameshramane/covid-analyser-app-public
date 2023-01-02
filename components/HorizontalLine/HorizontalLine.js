import React from "react";
import { View, StyleSheet } from "react-native";

function HorizontalLine({ style, ...restProps }) {
  return <View style={[styles.line, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
  },
});

export default HorizontalLine;
