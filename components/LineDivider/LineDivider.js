import { View, StyleSheet } from "react-native";
import React from "react";

const LineDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  line: {
    borderWidth: 0.5,
  },
});

export default LineDivider;
