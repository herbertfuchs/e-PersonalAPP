import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    color: theme.colors.alwaysWhite,
    borderRadius: 9,
    backgroundColor: theme.colors.temaColor,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.alwaysWhite,
  },
});
