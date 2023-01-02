import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackArrowIcon } from "../../assets/icons";
import HorizontalLine from "../HorizontalLine";
import { routes } from "../../navigations/configs";

function BackButton({ ...restProps }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(routes.DASHBOARD)}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <BackArrowIcon />
          </View>
          <Text style={styles.text}>Back to Dashboard</Text>
        </View>
        <HorizontalLine style={styles.line} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
  },
  content: { flexDirection: "row", paddingHorizontal: 30, paddingVertical: 20 },
  icon: {
    marginRight: 20,
  },
  text: {
    fontSize: 16,
  },
  line: {
    borderColor: "#cccccc",
  },
});

export default BackButton;
