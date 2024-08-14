import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  ImageBackground,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../style/stylesGenerics/styleGeneric";
import styleView from "./styleView";
import moneyImage from "../../../assets/images/money.jpeg";
import stylePicker from "@components/style/pickerStyle/stylePicker";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const renderItem = ({ item, index }) => (
    <View style={styleView.purchaseContainer}>
      <Text style={styleView.purchaseText}>
        Data: {new Date(item.date).toLocaleDateString()}
      </Text>
      <Text style={styleView.purchaseText}>Valor: {item.value.toFixed(2)}</Text>
      <Button
        title="Excluir Compra"
        onPress={() => handleDeletePurchase(index)}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={styles.backgroundImage}>
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

          {selectedClient ? (
            <>
              <Text style={styleView.totalDebtText}>
                Total Devido: {totalDebt.toFixed(2)}
              </Text>
              <View style={styleView.container}>
                <FlatList data={clientPurchases} renderItem={renderItem} />
              </View>
              <View style={styleView.viewbuton}>
                <Button
                  title="Fechar Débitos"
                  onPress={() => setSelectedClient("")}
                />
              </View>
            </>
          ) : null}

          <Button
            title="Excluir Todas as Compras"
            onPress={handleDeleteAllPurchases}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
