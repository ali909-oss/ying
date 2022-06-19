import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, ImageBackground } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const profile =require('../assets/images/Bitmap.png') 
const Welcomesix = () => {
    const [image,setImage] =useState(profile);
    const [name,setName]=useState('Meghan');
    const [coin,setCoin]=useState('1.5') 
    return ( 
        <NativeBaseProvider>
            <LinearGradient   
                colors={["#14aea1", "#28b995", "#35c18e"]}
                style={styles.gradient}  
            >  
                <Box style={styles.container}>
                <Image 
                        style={styles.image1} 
                        source={require("../assets/images/pattern.png")}
                    /> 
                    <ImageBackground 
                        style={styles.imgBackground} 
                        source={require("../assets/images/White.png")}

                    > 
 
                            <Image
                                style={styles.remy}
                                source={image}
                            />
                        <Box> 
                            
                            <Text style={styles.textb}>Congrats, you completed
your task!</Text>
                        </Box>
                    </ImageBackground>
 
                    <Box style={{}}>



                        <Text style={styles.texts}>{name} will be given {coin} Balance Coins, and will see your review on her profile shortly.</Text>

                    </Box>
                  
                </Box>
            </LinearGradient>
        </NativeBaseProvider>
    );
};

export default Welcomesix;

const styles = StyleSheet.create({
    container: {
        width: wp("100%"),
        height: hp("100%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backimg: {
        borderRadius: 25,
        backgroundColor: '#fff',
        width: wp('30%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp('6%')


    },
    imgBackground: {
        width: wp('70%'),
        height: hp('35%'),
        alignSelf: 'center'

    },
    image1: {
        width: wp("100%"),
        position: "absolute",
        height:hp('30%'),
        top:0,
        left:0,
        alignItems:'flex-end',
        transform: [{rotate: '-180deg'}],
    },
    remy: {
        borderRadius: 25,
        width: wp('28%'),
        height: hp('14%'),
        alignSelf:'center',
        marginTop:hp('3%')

    },
    gradient: {
        flex: 1,
    },
    image: {
        alignSelf: "center",
        marginTop: hp("10%"),
        width: wp("40%"),
        height: hp("20%"),
    },
    textt: {
        color: "#28292A",
        marginTop: hp("5%"),
        fontSize: 11,
        alignSelf: "center",
    },
    texts: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        lineHeight: hp("3%"),
        margin: 5,
        letterSpacing: wp('0.2%'),
        fontWeight:'500',
        padding:wp('5%')


    },
    welcome: {
        color: "#fff",
        marginTop: hp("15%"),
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 35,
    },
    texta: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
    },
    textb: {
        color: "#fff",
        fontSize: 22,
        textAlign: "center",
        fontWeight: 'bold',
        lineHeight: hp("4%"),
        marginTop:hp('2%')
        // margin: 8,
    },
  
});