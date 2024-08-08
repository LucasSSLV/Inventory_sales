import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  FlatList,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styleView from "@components/ViewDebtsScreen/styleView";
import money from "../../../assets/images/money.jpeg";
import styles from "../style/inputStyle/styles";

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
    <View style={styleView.purchaseContainer}>
      <Text>Nome: {item.name}</Text>
      <Text>Contato: {item.contact}</Text>
      <Button
        title="Excluir Cliente"
        onPress={() => handleDeleteClient(item.name)}
      />
    </View>
  );

  return (
    <ImageBackground source={money} style={styles.backgroundImage}>
      <View>
        <FlatList
          data={clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
        <Button
          title="Voltar para a Tela Principal"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ImageBackground>
  );
}
