import { DefaultTheme } from "@react-navigation/native";
import COLORS from "../../constants/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    white: COLORS.white,
  },
};
