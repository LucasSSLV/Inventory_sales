import { StyleSheet } from "react-native";

const styleView = StyleSheet.create({
  viewGlobal: {
    flex: 1,
    height: 120,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 255, 255, 0.9)",
  },
  viewClient: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  viewButton: {
    margin: 10,
    width: "50%",
    height: 40,
    backgroundColor: "rgba(255, 0, 0, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
  viewButtonBack: {
    margin: 10,
    height: 50,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
});

export default styleView;
