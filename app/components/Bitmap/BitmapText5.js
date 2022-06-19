
import React from "react";
import { StyleSheet, Image, TouchableOpacity ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center,Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

  
 

const BitmapTextfive = () => {
  return (
    <NativeBaseProvider>
        <Center>
        <Box alignItems="center" w="80%" alignSelf={"center"} style={styles.container}>
             <Text style={styles.textt}>
            <Text fontSize={"2xl"} style={styles.textb}>Congrats,you're a <Text fontSize={"2xl"} style={styles.textc}>Skill sharing member</Text></Text>
            </Text>
            <Text fontSize={"sm"} style={styles.textd}>Below is what will be seen on your profile by others in your group. </Text>
            </Box>

           
           
        </Center>
    </NativeBaseProvider>
  )}

export default BitmapTextfive ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        
    
       
     
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
        color:'black',
        fontWeight:'bold',
        textAlign:'center'
    },
    textc:{
        color:'#44C983',
        fontWeight:'bold'


    },
    textt:{
        textAlign:"center",
        lineHeight: hp("4%"),
        letterSpacing: wp('0.2%'),
        padding:hp('5%')



    },
    textd:{
        color: "black",
        textAlign: "center",
        lineHeight: hp("3%"),
        letterSpacing: wp('0.2%'),
        fontWeight: '500',
        padding:hp('5%'),

    }
})
