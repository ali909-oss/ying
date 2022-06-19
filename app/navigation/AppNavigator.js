import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerformanceNavigator from "./HomeStack";
const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PerformanceNavigator" component={PerformanceNavigator} />
   
  </Stack.Navigator>
);
export default AppNavigator;
