import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import AddClientScreen from "./src/components/AddClientScreen/AddClientScreen";
import AddPurchaseScreen from "./src/components/AddPurchaseScreen/AddPurchaseSdreen";
import ViewDebtsScreen from "./src/components/ViewDebtsScreen/ViewDebtsScreen";
import ClientListScreen from "@components/ClientListScreen/ClientListScreen";
import { View, StyleSheet } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Inventory Sales" component={HomeScreen} />
          <Stack.Screen name="AddClient" component={AddClientScreen} />
          <Stack.Screen name="AddPurchase" component={AddPurchaseScreen} />
          <Stack.Screen name="ViewDebts" component={ViewDebtsScreen} />
          <Stack.Screen name="ClientList" component={ClientListScreen} />
        </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
// });
