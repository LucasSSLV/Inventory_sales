import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddClientScreen({ navigation }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleAddClient = async () => {
    if (!name) {
      Alert.alert('Erro', 'Nome do cliente é obrigatório');
      return;
    }

    const newClient = { name, contact, purchases: [] };

    try {
      const clients = JSON.parse(await AsyncStorage.getItem('clients')) || [];
      clients.push(newClient);
      await AsyncStorage.setItem('clients', JSON.stringify(clients));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do Cliente"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Contato"
        value={contact}
        onChangeText={setContact}
      />
      <Button title="Adicionar Cliente" onPress={handleAddClient} />
    </View>
  );
}
