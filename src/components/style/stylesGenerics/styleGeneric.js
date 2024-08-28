import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    backgroundColor: "#D1E9F6",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderCurve: 5,
    borderColor: "black",
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
    backgroundColor: "rgba(000, 0, 0, 0.2)",
  },
});

export default styles;
