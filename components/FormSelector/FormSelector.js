import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import COLORS from "../../constants/colors";
import { CheckIcon } from "../../assets/icons";

const FormSelector = ({ Icon, text, style, name, ...restProps }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setFieldValue(name, !values[name]);
      }}
    >
      <View style={[styles.container, style]}>
        {values[name] && (
          <View style={styles.check}>
            <CheckIcon />
          </View>
        )}
        <View style={styles.icon}>
          <Icon />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  icon: {
    height: 100,
    justifyContent: "center",
  },
  check: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 4,
    alignSelf: "flex-start",
    position: "absolute",
  },
});

export default FormSelector;
