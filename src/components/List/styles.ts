import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  listText: {
    color: "#F2F2F2",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonCheck: {
    marginLeft: 10,
  },
  disable: {
    textDecorationLine: "line-through",
  },
});
