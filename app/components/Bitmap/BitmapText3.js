
import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

  
 

const BitmapTextthree = () => {
  return (
    <NativeBaseProvider>
        <Center>
        <Box alignItems="center" w="80%" alignSelf={"center"} style={styles.container}>
             <Text style={styles.textt}>
            <Text style={styles.textb}>What is a <Text style={styles.textc}>skill</Text> <Text style={styles.textb}>that you can offer to the group? </Text></Text>
            </Text>
            <Text style={styles.textd}>As a hobby or as one gift of your expertise ,it counts as a skill you can provide to others on YING. </Text>
            </Box>

           
           
        </Center>
    </NativeBaseProvider>
  )}

export default BitmapTextthree ;
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
    textt:{
        textAlign:"center",
        lineHeight: hp("3%"),
        letterSpacing: wp('0.2%'),
        padding:hp('5%')



    },
    textd:{
        color: "black",
        fontSize: 17,
        textAlign: "center",
        lineHeight: hp("3%"),
        letterSpacing: wp('0.2%'),
        fontWeight: '500',
        padding:hp('4%'),
        marginTop:hp('-4%')

    }
})
