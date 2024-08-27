import { StyleSheet } from "react-native";

const styleView = StyleSheet.create({
  viewGlobal: {
    flex: 1,
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF8F3",
    borderRadius: 10,
  },
  viewClient: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonBackText: {
    color: "white",
    fontSize: 30,
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
    backgroundColor: "#9DBDFF",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: 20,
    borderRadius: 20,
    fontWeight: "bold",
  },
});

export default styleView;
