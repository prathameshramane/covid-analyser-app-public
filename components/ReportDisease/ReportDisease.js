import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { CheckIcon, CrossIcon } from "../../assets/icons";

const ReportDisease = ({ check, disease, style, ...restProps }) => {
  return (
    <View style={[styles.container, style]}>
      {check ? (
        <>
          <View style={styles.iconGreenCircle}>
            <CheckIcon />
          </View>
          <Text>{disease}</Text>
        </>
      ) : (
        <>
          <View style={styles.iconRedCircle}>
            <CrossIcon />
          </View>
          <Text>{disease}</Text>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  iconGreenCircle: {
    backgroundColor: "#11FF0C",
    padding: 1,
    borderRadius: 10,
    marginRight: 5,
  },
  iconRedCircle: {
    backgroundColor: "#FF0000",
    padding: 1,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default ReportDisease;
