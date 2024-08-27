import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    backgroundColor: "#D1E9F6",
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 8,
  },
  inputArea: {
    width: "80%",
    fontSize: 25,
    fontWeight: "bold",
    padding: 2,
    margin: 10,
    height: 40,
    textAlign: "center",
    borderColor: "rgba(000, 0, 0, 0.6)",
    borderWidth: 2,
    borderRadius: 5,
    // color: "white",
    backgroundColor: "rgba(000, 0, 0, 0.2)",
  },
});

export default styles;
