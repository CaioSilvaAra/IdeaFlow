import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxTop: {
    height: Dimensions.get("window").height / 7,
    width: "95%",
    bottom: 300,
  },
  fundo: {
    position: "absolute",
    height: "100%",
  },
  input: {
    flexDirection: "column",
    justifyContent: "flex-start", // Distribui o espaço
    top: 50,
  },
  inputitem: {
    alignContent: "space-between",
    padding: 10,
  },
  boxButton: {
    height: "20%",
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
});
