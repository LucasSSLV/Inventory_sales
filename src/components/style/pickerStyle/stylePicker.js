import { StyleSheet } from "react-native";

const stylePicker = StyleSheet.create({
  pickerArea: {
    alignItems: "center",
    backgroundColor: "green", // Cor de fundo do Picker
    color: "black", // Cor do texto do Picker
    width: "80%",
  },
  pickerAreaClient: {
    // height: 50,
    backgroundColor: "#F0F0F0", // Cor de fundo do Picker
    borderRadius: 8, // Bordas arredondadas
    borderColor: "#CCCCCC", // Cor da borda
    borderWidth: 1, // Largura da borda
    // paddingHorizontal: 10, // Espaçamento interno horizontal
    color: "black", // Cor do texto do Picker
  },
});

export default stylePicker;
