import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  top: {
    backgroundColor: "#0A0A0A",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 20,
    gap: 20,
    marginBottom:100,
  },

  seta: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
    paddingTop: 6,
  },

  body: {
    justifyContent: "center",
    alignItems: "center",
  },

  containerSenha: {
    marginTop: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: "#938F95",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#fff",
    height: 50,
  },

  icon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  redefinicao: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 60,
    marginLeft: 70,
    alignSelf: "flex-start",
  },

  pergunta: {
    color: "#BABABA",
    fontSize: 16,
  },

  link: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  ajuda: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 210,
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    borderWidth: 0.6,
    backgroundColor: "#151515",
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },

  buttonText: {
    color: "#444444",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
