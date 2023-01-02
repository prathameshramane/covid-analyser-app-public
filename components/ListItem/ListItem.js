import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";

import COLORS from "../../constants/colors";

const ListItem = ({ title, subtitle, onPress, Icon, style, ...restProps }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        {Icon && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 65,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: COLORS.light,
    flexDirection: "row",
  },
  icon: {
    marginRight: 20,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
  },
});

export default ListItem;
