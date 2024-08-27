import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styleView from "@components/ViewDebtsScreen/styleView";
import styles from "./styles";
import stylesGenerics from "../style/stylesGenerics/styleGeneric";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClientListScreen({ navigation }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const storedClients =
          JSON.parse(await AsyncStorage.getItem("clients")) || [];
        setClients(storedClients);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClients();
  }, []);

  const handleDeleteClient = (clientName) => {
    Alert.alert(
      "Excluir Cliente",
      "Você tem certeza que deseja excluir este cliente e todos os seus dados?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              const storedClients =
                JSON.parse(await AsyncStorage.getItem("clients")) || [];
              const updatedClients = storedClients.filter(
                (client) => client.name !== clientName
              );

              await AsyncStorage.setItem(
                "clients",
                JSON.stringify(updatedClients)
              );
              setClients(updatedClients);
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewGlobal}>
      <Text style={styleView.purchaseText}>Nome: {item.name}</Text>
      <Text style={styleView.purchaseText}>Contato: {item.contact}</Text>
      <TouchableOpacity
        style={styles.viewButton} // Certifique-se de ajustar o estilo para combinar com o TouchableOpacity
        onPress={() => handleDeleteClient(item.name)}
      >
        <Text style={styles.buttonText}>Excluir Cliente</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground style={stylesGenerics.backgroundImage}>
      <View style={styles.viewClient}>
        <FlatList
          data={clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
        {/* <View style={styles.viewGlobal}> */}
          <TouchableOpacity
            style={styles.viewButtonBack} // Certifique-se de ajustar o estilo para combinar com o TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Voltar para a Tela Principal</Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    </ImageBackground>
  );
}
