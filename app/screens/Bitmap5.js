import React from "react";
import { StyleSheet, TouchableOpacity, Text ,ImageBackground,View} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center ,Image,KeyboardAvoidingView} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import BitmapTextfour from "../components/Bitmap/BitmapText4";
import Inputfie from "../components/Bitmap/Inputfie";
import BitmapTextfive from "../components/Bitmap/BitmapText5";
import Skills from "../components/Bitmap/Skills";



const Bitmapfive = () => {

  return (
    <NativeBaseProvider>
        <Box  style={styles.container}> 

        <Center>
      <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="sm" borderRadius={20} marginTop={hp('8%')} />
    </Center>
   <BitmapTextfive/>
   <Skills/>
    </Box>
        
        </NativeBaseProvider>
  )}
  export default Bitmapfive;

  const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        backgroundColor:'#fff',
        height:hp('100%'),
        margin:0

        
    },
})