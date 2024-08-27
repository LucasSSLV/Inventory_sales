import { StyleSheet } from "react-native";

const styleView = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
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
    alignItems: "center",
    height: 40,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  purchaseText: {
    textAlign: "center",
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
