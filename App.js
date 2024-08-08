import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import AddClientScreen from "./src/components/AddClientScreen/AddClientScreen";
import AddPurchaseScreen from "./src/components/AddPurchaseScreen/AddPurchaseSdreen";
import ViewDebtsScreen from "./src/components/ViewDebtsScreen/ViewDebtsScreen";
import ClientListScreen from "@components/ClientListScreen/ClientListScreen";
import { ImageBackground, StyleSheet } from "react-native";
import money from "./assets/images/money.jpeg";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageBackground source={money} style={style.background}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Inventory Sales" component={HomeScreen} />
          <Stack.Screen name="AddClient" component={AddClientScreen} />
          <Stack.Screen name="AddPurchase" component={AddPurchaseScreen} />
          <Stack.Screen name="ViewDebts" component={ViewDebtsScreen} />
          <Stack.Screen name="ClientList" component={ClientListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
