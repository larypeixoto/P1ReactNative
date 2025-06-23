import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 140,
    margin: 4,
    height: 130,
  },

  background: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    borderRadius: 8,
  },

  infoContent: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 22,
    gap: 6,
  },

  tagContainer: {
    minHeight: 18,
  },

  chapContainer: {
    minHeight: 18,
    marginLeft: 4,
  },

  tagPlan: {
    backgroundColor: "#525252",
    color: "#ffffff",
    fontSize: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    textTransform: "uppercase",
  },

  tagChap: {
    color: "#ffffff",
    fontSize: 12,
  },

  nameContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 4,
  },

  name: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },

  semPlano: {
    marginTop: 4,
  },
});
