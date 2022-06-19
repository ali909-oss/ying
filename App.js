import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <Location />\
    // <Loader visible={true} />
    <NavigationContainer >
      <AppNavigator />
    </NavigationContainer>
  );
}
