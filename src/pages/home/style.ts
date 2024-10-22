import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    position: "absolute",
    height: "100%",
  },
  boxTop: {
    width: "90%",
    height: 100,
    top: 40,
    justifyContent: "center",
    position: "absolute",
  },
  boxTitle: {
    width: "95%",
    position: "absolute",
    bottom: 200,
  },
  boxBottom: {
    width: "90%",
    position: "absolute",
    bottom: 30,
  },
});
