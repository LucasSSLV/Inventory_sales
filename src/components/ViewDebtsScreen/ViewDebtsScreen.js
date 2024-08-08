import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ViewDebtsScreen() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [clientPurchases, setClientPurchases] = useState([]);
  const [totalDebt, setTotalDebt] = useState(0);

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

  useEffect(() => {
    if (selectedClient) {
      const client = clients.find((client) => client.name === selectedClient);
      setClientPurchases(client ? client.purchases : []);
      setTotalDebt(
        client
          ? client.purchases.reduce(
              (total, purchase) => total + purchase.value,
              0
            )
          : 0
      );
    }
  }, [selectedClient, clients]);

  const handleDeletePurchase = (index) => {
    Alert.alert(
      "Excluir Compra",
      "Você tem certeza que deseja excluir esta compra?",
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
              const updatedClients = storedClients.map((client) => {
                if (client.name === selectedClient) {
                  client.purchases.splice(index, 1);
                }
                return client;
              });

              await AsyncStorage.setItem(
                "clients",
                JSON.stringify(updatedClients)
              );
              const updatedClient = updatedClients.find(
                (client) => client.name === selectedClient
              );
              setClientPurchases(updatedClient ? updatedClient.purchases : []);
              setTotalDebt(
                updatedClient
                  ? updatedClient.purchases.reduce(
                      (total, purchase) => total + purchase.value,
                      0
                    )
                  : 0
              );
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const handleDeleteAllPurchases = async () => {
    Alert.alert(
      "Excluir Todas as Compras",
      "Você tem certeza que deseja excluir todas as compras deste cliente?",
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
              const updatedClients = storedClients.map((client) => {
                if (client.name === selectedClient) {
                  client.purchases = [];
                }
                return client;
              });

              await AsyncStorage.setItem(
                "clients",
                JSON.stringify(updatedClients)
              );
              setClientPurchases([]);
              setTotalDebt(0);
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );
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
      <Text>Total Devido: {totalDebt.toFixed(2)}</Text>
      {clientPurchases.map((purchase, index) => (
        <View key={index}>
          <Text>Data: {new Date(purchase.date).toLocaleDateString()}</Text>
          <Text>Valor: {purchase.value.toFixed(2)}</Text>
          <Button
            title="Excluir Compra"
            onPress={() => handleDeletePurchase(index)}
          />
        </View>
      ))}
      <Button
        title="Excluir Todas as Compras"
        onPress={handleDeleteAllPurchases}
      />
    </View>
  );
}