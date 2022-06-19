import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReceipeDetail from "../screens/RecepieDetail";
import Welcomescreen from "../screens/WelcomeScreen";
import Welcometwo from "../screens/Welcome2";
import Welcomethree from "../screens/Welcome3";
import Welcomefour from "../screens/Welcome4";
import Welcomefive from "../screens/Welcome5";
import Welcomesix from "../screens/Welcome6";
import Bitmapone from "../screens/Bitmap1";
import Bitmaptwo from "../screens/Bitmap2";
import Bitmapthree from "../screens/Bitmap3";
import Bitmapfour from "../screens/Bitmap4";
import Bitmapfive from "../screens/Bitmap5";
const Stack = createStackNavigator();
const PerformanceNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen name="ReceipeDetail" component={ReceipeDetail} />
    <Stack.Screen name="Bitmapfive" component={Bitmapfive} />



   
  </Stack.Navigator>
);
export default PerformanceNavigator;
