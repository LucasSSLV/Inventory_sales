import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import AddClientScreen from "./src/components/AddClientScreen/AddClientScreen";
import AddPurchaseScreen from "./src/components/AddPurchaseScreen/AddPurchaseSdreen";
import ViewDebtsScreen from "./src/components/ViewDebtsScreen/ViewDebtsScreen";
import ClientListScreen from "@components/ClientListScreen/ClientListScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Inventory Sales" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddClient" component={AddClientScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddPurchase" component={AddPurchaseScreen} />
          <Stack.Screen options={{headerShown: false}} name="ViewDebts" component={ViewDebtsScreen} />
          <Stack.Screen options={{headerShown: false}} name="ClientList" component={ClientListScreen} />
        </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}
