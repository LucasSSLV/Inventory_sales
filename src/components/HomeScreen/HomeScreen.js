import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import moneyImage from "../../../assets/images/money.jpeg";
import stylesGeneric from "../style/stylesGenerics/styleGeneric";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={moneyImage} style={stylesGeneric.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate("AddClient")}
        >
          <Text style={styles.buttonText}>Cadastrar Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate("AddPurchase")}
        >
          <Text style={styles.buttonText}>Registrar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button3]}
          onPress={() => navigation.navigate("ViewDebts")}
        >
          <Text style={styles.buttonText}>Consultar Débitos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button4]}
          onPress={() => navigation.navigate("ClientList")}
        >
          <Text style={styles.buttonText}>Consultar Clientes</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

