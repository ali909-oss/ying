import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import BitmaponeText from "../components/Bitmap/BitmaponeText";
import AddImage from "../components/Bitmap/AddImage";

const Bitmapone = () => {
  return (
    <NativeBaseProvider>
        <Box style={styles.container}>
            <BitmaponeText/>
            <Box style={{marginTop:hp('15%')}}>
            <AddImage/>

            </Box>
            


           
        </Box>
    </NativeBaseProvider>
  )}

export default Bitmapone ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        // height:hp('100%'),
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image1: {
        width: wp("100%"),
        bottom: 0,
        position: 'absolute'
    },
})