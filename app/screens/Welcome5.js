import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, ImageBackground } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const profile = require('../assets/images/Bitmap.png');
const profile2 =require('../assets/images/Remy.png')

  
const Welcomefive = () => {
    const [image, setImage] = useState(profile);
    const [image2, setImage2] = useState(profile2);
    const [name,setName]=useState('Meghan') 
  
    return (
        <NativeBaseProvider>
            <LinearGradient
                colors={["#14aea1", "#28b995", "#35c18e"]} 
                style={styles.gradient}
            > 
                <Box style={styles.container}>
                    <Image
                        style={styles.image2}
                        source={require("../assets/images/pattern.png")}
                    />
     

                    <Box style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Box style={styles.backimg}>

                        <Image
                            style={styles.remy}
                            source={image2}
                        />
                        </Box> 
                        <Box>
                                                    <Image
                            style={styles.bitmap}
                            source={image}
                        />
                        </Box>
 
                    </Box> 
                    <Box>  
                        <Text style={styles.textb}>Your Animation session 
with {name} is booked!</Text>
                    </Box>

                    <Box style={{}}>



                        <Text style={styles.texts}>We will notify you 30 minutes before the session starts as a reminder</Text>

                    </Box>
                    <Image
                        style={styles.image1}
                        source={require("../assets/images/pattern.png")}
                    />
                    <Box style={{ alignItems:'flex-end',
        bottom: 0,
        position: 'absolute',
        right:0,}}>
                     <Image
                        style={styles.image3}
                        source={require("../assets/images/White.png")}
                    />
                    </Box>
                </Box>
            </LinearGradient>
        </NativeBaseProvider>
    );
};

export default Welcomefive;

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
        transform: [{rotate: '-20deg'}],



    },
    imgBackground: {
        width: wp('70%'),
        height: hp('35%'),
        alignSelf: 'center'

    },
    image1: {
        width: wp("100%"),
        justifyContent: "flex-end",
        bottom: 0,
        position: 'absolute'
    },
    image3: {
        width: wp('50%'),
        height: hp('25%'),
        left:70,
        
       

        

    },
    image2: {
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


    },
    bitmap:{
        borderRadius: 25,
        width: wp('30%'),
        height: hp('15%'),
        transform: [{rotate: '20deg'}],


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
        fontSize: 17,
        textAlign: "center",
        lineHeight: hp("3%"),
        margin: 5,
        letterSpacing: wp('0.1%'),
        fontWeight: '500',
        padding:hp('3%')


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
        marginTop: hp('2%'),
        letterSpacing: wp('0.3%'),
        lineHeight: hp("4%"),
        padding:wp('2%')


        // margin: 8,
    },

});