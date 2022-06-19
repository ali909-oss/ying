
import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

  
 

const BitmaponeTexttwo = () => {
  return (
    <NativeBaseProvider>
        <Center>
        <Box alignItems="center" w="80%" alignSelf={"center"} style={styles.container}>
       
            <Text style={styles.textb}>Next, <Text style={styles.textc}>Write a brief bio</Text></Text>
            <Text style={styles.textd}>Provide a short bio about yourself to tell the rest of the community. </Text>
            </Box>

           
           
        </Center>
    </NativeBaseProvider>
  )}

export default BitmaponeTexttwo ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        marginTop:hp('25%')
        
    
       
     
    },
    image1: {
        width: wp("100%"),
        bottom: 0,
        position: 'absolute'
    },
    texta:{
      textAlign:'center'
    


    },
    textb:{
        fontSize:22,
        color:'black',
        fontWeight:'bold',
        textAlign:'center'
    },
    textc:{
        color:'#44C983',
        fontSize:22,
        fontWeight:'bold'


    },
    textd:{
        color: "black",
        fontSize: 15,
        textAlign: "center",
        lineHeight: hp("3%"),
        margin: 5,
        letterSpacing: wp('0.2%'),
        fontWeight: '500',
        padding:hp('5%')

    }
})
