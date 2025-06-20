import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 180,
    margin: 5,
  },

  background: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    borderRadius: 8,
  },

  infoContent: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },

  tagPlan: {
    backgroundColor: "#525252",
    color: "#fff",
    fontSize: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    textTransform: 'uppercase',
  },

  tagChap: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 4,
  },

  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 4,
  },

  tagPlaceholder: {
    width:40,
    height:18,
  }
});
