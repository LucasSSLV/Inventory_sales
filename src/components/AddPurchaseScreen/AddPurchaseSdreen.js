import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../style/inputStyle/styles";
import stylePicker from "../style/pickerStyle/stylePicker";
import moneyImage from "../../../assets/images/money.jpeg";

export default function AddPurchaseScreen({ navigation }) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [value, setValue] = useState("");

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

  const handleAddPurchase = async () => {
    if (!selectedClient || !value) {
      Alert.alert("Erro", "Cliente e valor são obrigatórios");
      return;
    }

    try {
      const storedClients =
        JSON.parse(await AsyncStorage.getItem("clients")) || [];
      const updatedClients = storedClients.map((client) => {
        if (client.name === selectedClient) {
          client.purchases.push({
            date: new Date().toISOString(),
            value: parseFloat(value),
          });
        }
        return client;
      });

      await AsyncStorage.setItem("clients", JSON.stringify(updatedClients));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={moneyImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Picker
          style={stylePicker.pickerArea}
          selectedValue={selectedClient}
          onValueChange={(itemValue) => setSelectedClient(itemValue)}
        >
          {clients.map((client, index) => (
            <Picker.Item
              style={stylePicker.pickerAreaClient}
              key={index}
              label={client.name}
              value={client.name}
            />
          ))}
        </Picker>
        <TextInput
          style={styles.inputArea}
          placeholderTextColor="white"
          placeholder="Valor da Compra"
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
        />
        <Button title="Registrar Compra" onPress={handleAddPurchase} />
      </View>
    </ImageBackground>
  );
}
