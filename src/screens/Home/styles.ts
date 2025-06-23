import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  banner: {
    width: "100%",
    height: 234,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  tagBadge: {
    backgroundColor: "#1C92E5",
    paddingHorizontal: 3,
    paddingTop: 2,
    paddingBottom: 2,
    position: "absolute",
    top: 10,
    left: 20,
  },

  badgeText: {
    color: "#ffffff",
    borderRadius: 2,
    fontSize: 10,
  },

  titleContainer: {
    marginLeft: 20,
  },

  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  age: {
    marginLeft: 20,
    backgroundColor: "#ED6A14",
    borderRadius: 2,
    paddingHorizontal: 2,
    width: 24,
    height: 25,
    justifyContent: "center",
    margin: 8,
    marginBottom: 4,
  },

  ageText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },

  tagsDrama: {
    marginLeft: 20,
    flexDirection: "row",
  },

  tag: {
    color: "#7E7B7A",
    fontSize: 15,
    letterSpacing: 1,
  },

  separator: {
    color: "#7E7B7A",
    fontSize: 15,
  },

  buttons: {
    width: 400,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignSelf: "center",
    margin: 10,
  },

  category: {
    marginLeft: 14,
    marginTop: 28,
    marginBottom: 18,
  },

  categoryTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    margin: 0,
  },
});
