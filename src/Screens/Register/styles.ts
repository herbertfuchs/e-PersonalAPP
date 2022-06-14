// guizão esteve aqui :D
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    fontFamily: "Roboto_400Regular",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    color: "#000",
    backgroundColor: theme.colors.textColor,
    borderRadius: 9,
    width: "90%",
  },
});
