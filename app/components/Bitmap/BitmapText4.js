
import React from "react";
import { StyleSheet, Image, TouchableOpacity ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center,Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

  
 

const BitmapTextfour = () => {
  return (
    <NativeBaseProvider>
        <Center>
        <Box alignItems="center" w="80%" alignSelf={"center"} style={styles.container}>
             <Text style={styles.textt}>
            <Text fontSize={"2xl"} style={styles.textb}>Nice! Give us <Text fontSize={"2xl"} style={styles.textc}>details</Text> <Text style={styles.textb}>on what you can offer </Text></Text>
            </Text>
            <Text fontSize={"sm"} style={styles.textd}>This will inform people the specifics of your skills offering and your availability to help. </Text>
            </Box>

           
           
        </Center>
    </NativeBaseProvider>
  )}

export default BitmapTextfour ;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        marginTop:hp('3%')
        
    
       
     
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
        lineHeight: hp("3%"),
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
