import React from "react";
import { View, Button, StyleSheet } from "react-native";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar Cliente"
          onPress={() => navigation.navigate("AddClient")}
          color="#6200EE" // Cor do botão
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Registrar Compra"
          onPress={() => navigation.navigate("AddPurchase")}
          color="#03DAC5"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Consultar Débitos"
          onPress={() => navigation.navigate("ViewDebts")}
          color="#BB86FC"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Consultar Clientes"
          onPress={() => navigation.navigate("ClientList")}
          color="#3700B3"
        />
      </View>
    </View>
  );
}
