import { StyleSheet } from "react-native";

const stylePicker = StyleSheet.create({
  pickerArea: {
    width: "80%",
    alignSelf: "center", // Centraliza o Picker horizontalmente
    backgroundColor: "#E0F7FA", // Cor de fundo suave e agradável
    borderRadius: 10, // Arredonda os cantos do Picker
    paddingVertical: 10, // Espaçamento interno vertical
    marginVertical: 15, // Espaçamento externo vertical para separar de outros elementos
    borderColor: "#00796B", // Cor da borda para destacar o Picker
    borderWidth: 1, // Largura da borda
  },
  pickerAreaClient: {
    color: "black", // Cor do texto do Picker.Item
    fontSize: 30, // Tamanho da fonte para melhor legibilidade
    backgroundColor: "#FCF8F3", // Cor de fundo do Picker.Item
    paddingVertical: 8, // Espaçamento interno vertical
    paddingHorizontal: 12, // Espaçamento interno horizontal
    borderRadius: 5, // Arredondamento para os itens do Picker
  },
});

export default stylePicker;
