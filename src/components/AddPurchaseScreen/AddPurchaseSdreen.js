import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    <View>
      <Picker
        selectedValue={selectedClient}
        onValueChange={(itemValue) => setSelectedClient(itemValue)}
      >
        {clients.map((client, index) => (
          <Picker.Item key={index} label={client.name} value={client.name} />
        ))}
      </Picker>
      <TextInput
        placeholder="Valor da Compra"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <Button title="Registrar Compra" onPress={handleAddPurchase} />
    </View>
  );
}
