import { StyleSheet } from "react-native";

const styleView = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  viewbuton: {
    justifyContent: "space-between",
    margin: 10,
  },
  totalDebtText: {
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "black", // Cor de fundo do total devido
    color: "white", // Cor para destacar o total devido
  },
  purchaseContainer: {
    height: "auto",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  purchaseText: {
    fontSize: 18,
    marginBottom: 5,
    color: "black",
  },
  clientNotFound: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});

export default styleView;
