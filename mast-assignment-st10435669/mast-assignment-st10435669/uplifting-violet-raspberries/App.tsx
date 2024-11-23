import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "./MenuContext"; // Import MenuProvider
import LoginScreen from "./screens/LoginScreen";
import BookingsScreen from "./screens/BookingsScreen";
import ViewMenuScreen from "./screens/ViewMenuScreen";
import EditMenuScreen from "./screens/EditMenuScreen";
import AddMenuItemScreen from "./screens/AddMenuItemScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider> {/* Wrap the app in MenuProvider */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Bookings" component={BookingsScreen} />
          <Stack.Screen name="ViewMenu" component={ViewMenuScreen} />
          <Stack.Screen name="EditMenu" component={EditMenuScreen} />
          <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}



