import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/redux-store";
import MainScreen from "./src/screens/mainScreen/MainScreen";
import SingleItemScreen from "./src/screens/singleItemScreen/SingleItemScreen";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={MainScreen} />
      <Stack.Screen name="FullSize" component={SingleItemScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
