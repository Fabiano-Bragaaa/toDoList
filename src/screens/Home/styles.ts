import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  imgView: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  formView: {
    backgroundColor: "#1A1A1A",
    height: "80%",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
  },

  input: {
    color: "#F2F2F2",
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    padding: 16,
    marginLeft: 12,
    marginRight: 8,
    fontSize: 16,
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
  },
  conclusaoView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  conclusao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  create: {
    marginTop: 20,
    color: "#4EA8DE",
    fontSize: 20,
    marginLeft: -30,
  },
  conclusionText: {
    marginTop: 20,
    color: "#8284FA",
    fontSize: 20,
  },
  validation1: {
    textAlign: "center",
    color: "#D9D9D9",
    marginTop: 20,
    fontSize: 15,
    marginLeft: 10,
    backgroundColor: "#333",
    borderRadius: 99,
    width: 20,
  },
  validation2: {
    textAlign: "center",
    color: "#D9D9D9",
    marginTop: 20,
    fontSize: 15,
    marginLeft: 10,
    backgroundColor: "#333",
    borderRadius: 99,
    width: 20,
  },

  sectionContainer: {
    width: "85%",
    marginLeft: 25,
  },
  borderSection: {
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#808080",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 15,
  },
  description: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 14,
  },
  emptyImg: {
    marginTop: 40,
  },
});
