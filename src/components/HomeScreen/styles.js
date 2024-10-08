import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    buttonContainer: {
      marginVertical: 10, // Espaçamento entre os botões
      width: "80%", // Largura dos botões
    },
      button: {
        width: "80%",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
      },
      button1: {
        backgroundColor: "#FCF8F3",
      },
      button2: {
        backgroundColor: "#FCF8F3",
      },
      button3: {
        backgroundColor: "#FCF8F3",
      },
      button4: {
        backgroundColor: "#FCF8F3",
      },
      buttonText: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
      },
  });

export default styles;
