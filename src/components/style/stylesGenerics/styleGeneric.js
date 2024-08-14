import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    backgroundColor: "#627254",
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  inputArea: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 2,
    margin: 10,
    height: 40,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    color: "white",
    backgroundColor: "rgba(000, 0, 0, 0.8)",
  },
});

export default styles;
