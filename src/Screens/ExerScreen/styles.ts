// guizão esteve aqui :D
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  Header: {
    backgroundColor: theme.colors.temaColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  box: {
    height: 300,
    backgroundColor: theme.colors.textColor,
    margin: 7,
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  greetings: {
    fontSize: 26,
    fontFamily: theme.fonts.title400,
    marginTop: 8,
    marginLeft: 8,
  },
  name: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.secondaryColor,
  },
  boxSoon: {
    height: "100%",
    backgroundColor: theme.colors.textColor,
  },
  soon: {
    fontFamily: theme.fonts.title400,
    textAlign: "center",
    fontSize: 28,
  },
});
