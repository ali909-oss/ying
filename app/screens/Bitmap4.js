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



const Bitmapfour = () => {

  return (
    <NativeBaseProvider>
        <Box  style={styles.container}> 

        <Feather name="arrow-left" size={30} style={{marginTop:hp('3%'),padding:wp('5%')}}/>
        <Center>
      <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="sm" borderRadius={20} />
    </Center>
    <BitmapTextfour/>
    <Inputfie/>
    </Box>
        
        </NativeBaseProvider>
  )}
  export default Bitmapfour;

  const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        backgroundColor:'#fff',
        height:hp('100%'),
        margin:0

        
    },
})