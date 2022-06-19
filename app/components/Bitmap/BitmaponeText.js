import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

  
 

const BitmaponeText = () => {
  return (
    <NativeBaseProvider>
        <Box style={styles.container}>
       
            <Box style={styles.texta}>
            <Text style={styles.textb}>Next, <Text style={styles.textc}>Upload a Pic</Text></Text>
            </Box>
            <Text style={styles.textd}>Since YING is a community-based platform we require everyone to upload a Pic. </Text>
           
        </Box>
    </NativeBaseProvider>
  )}

export default BitmaponeText ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor:'#fff',
      alignItems:"center",
      justifyContent:'center'
    },
    image1: {
        width: wp("100%"),
        bottom: 0,
        position: 'absolute'
    },
    texta:{
        alignSelf:'center',
        textAlign: "center",
        flexDirection:'row',


    },
    textb:{
        fontSize:22,
        color:'black',
        fontWeight:'bold'
    },
    textc:{
        color:'#44C983',
        fontSize:22,
        fontWeight:'bold'


    },
    textd:{
        color: "black",
        fontSize: 17,
        textAlign: "center",
        lineHeight: hp("3%"),
        margin: 5,
        letterSpacing: wp('0.2%'),
        fontWeight: '500',
        padding:hp('5%')

    }
})