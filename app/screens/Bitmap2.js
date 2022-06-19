import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import BitmaponeText from "../components/Bitmap/BitmaponeText";
import AddImage from "../components/Bitmap/AddImage";
import BitmaponeTexttwo from "../components/Bitmap/BitmapText2";
import InputText from "../components/Bitmap/InputField";

const Bitmaptwo = () => {
  return (
    <NativeBaseProvider>
        <Box  style={styles.container}>
          
            <BitmaponeTexttwo/>
            <InputText/>
            <TouchableOpacity onPress={() => navigation.navigate("Bitmapthree", { itemData: data })}>
              <Text>Next</Text>
            </TouchableOpacity>


           
        </Box>
    </NativeBaseProvider>
  )}

export default Bitmaptwo ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        backgroundColor:'#fff',
        height:hp('100%'),
       
        
    },
    image1: {
        width: wp("100%"),
        bottom: 0,
        position: 'absolute'
    },
})