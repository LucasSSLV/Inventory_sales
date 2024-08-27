import { StyleSheet } from "react-native";

const styleView = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    // height: "100%",
    borderRadius: 6,
  },
  viewbuton: {
    justifyContent: "center",
    margin: 10,
    width: "40%",
  },
  totalDebtText: {
    width: "50%",
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "black", // Cor de fundo do total devido
    color: "red", // Cor para destacar o total devido
    borderRadius: 6,
  },
  purchaseContainer: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    margin: 0,
    backgroundColor: "rgba(00, 255, 255, 0.3)",
    borderRadius: 10,
  },
  purchaseText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: "black",
  },
  purchaseTextValue: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: "red",
  },
  clientNotFound: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});

export default styleView;
