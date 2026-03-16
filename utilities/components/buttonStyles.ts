import { theme } from "../theme";
import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  baseButton: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 9999,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  primary: {
    backgroundColor: theme.colors.surface,
  },
  secondary: {
    backgroundColor: "#C0E863",
  },
});

export default buttonStyles;
