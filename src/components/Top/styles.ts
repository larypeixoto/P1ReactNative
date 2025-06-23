import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#0A0A0A",
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 12,
  },

  imageContainer: {},

  logoImage: {
    resizeMode: "contain",
    width: 130,
    height: 108,
  },

  texto: {
    fontSize: 50,
  },

  containerOpcoes: {
    gap: 20,
    flexDirection: "row",
  },

  todosOsProgramas: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },

  todosOsFilmes: {
    fontSize: 18,
    color: "#B5B5B5",
  },
});
