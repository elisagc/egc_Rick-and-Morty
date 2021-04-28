import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./screens/Home";
import Detail from "./screens/Detail";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Rick & Morty Characters" }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ title: "Character Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
