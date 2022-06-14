// guizão esteve aqui :D
import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingLeft: 10,
  },
  mainPlayerView: {
    flex: 1,
    alignItems: "center",
    width: 300,
  },
  videoView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: "100%",
    backgroundColor: "#d3d3d3",
  },
  imgPrincipal: {
    marginTop: 50,
    height: 300,
    width: "100%",
  },
  img: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 15,
    borderBottomWidth: 10,
    borderColor: "black",
  },
  titleVideo: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 28,
  },
  cronometro: {
    fontFamily: theme.fonts.title400,
    fontSize: 30,
    marginTop: 5,
  },
  cronometroContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "10%",
    height: "10%",
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
