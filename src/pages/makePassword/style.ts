import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "95%",
    bottom: 70,
  },
  fundo: {
    position: "absolute",
    height: "100%",
  },

  boxMid: {
    height: "20%",
    width: "95%",
    justifyContent: "center",
    top: 50,
  },
  boxBottom: {
    height: "20%",
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
});
