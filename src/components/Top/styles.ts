import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#0A0A0A",
    paddingTop: 10,
    paddingBottom:14,
    paddingHorizontal:12,
  },

  imageContainer: {
  },

  logoImage: {
    resizeMode: "contain",
    width:150,
    height: 130,
  },

  texto: {
    fontSize: 50,
  },

  containerOpcoes: {
    gap: 10,
    flexDirection: 'row',
  },

  todosOsProgramas: {
    fontSize:18,
    fontWeight: "bold",
    color: "#ffffff",
  },

  todosOsFilmes: {
    fontSize:18,
    color: "#ffffff",
  }
});
