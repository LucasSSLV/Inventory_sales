import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Cadastrar Cliente"
        onPress={() => navigation.navigate("AddClient")}
      />
      <Button
        title="Registrar Compra"
        onPress={() => navigation.navigate("AddPurchase")}
      />
      <Button
        title="Consultar Débitos"
        onPress={() => navigation.navigate("ViewDebts")}
      />
      <Button
        title="Consultar Clientes"
        onPress={() => navigation.navigate("ClientList")}
      />
    </View>
  );
}
