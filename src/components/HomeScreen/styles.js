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
        backgroundColor: "#6200EE",
      },
      button2: {
        backgroundColor: "#03DAC5",
      },
      button3: {
        backgroundColor: "#BB86FC",
      },
      button4: {
        backgroundColor: "#3700B3",
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
      },
  });

export default styles;
