import React, { useState } from "react";
import { StyleSheet, TouchableOpacity ,ImageBackground,View} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center,Text ,Image,KeyboardAvoidingView,Input} from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';


const Inputfie = () =>{
    const [type,setType]=useState('Cooking');
    const [value, setValue] = React.useState("");
    const handleChange = text => setValue(text);

    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");




    return(
        <NativeBaseProvider>
        <Box style={styles.back}>
            <Text fontSize={"sm"}>Type of {type} </Text>
            <Input value={value} w="100%" marginTop={hp('0.2%')} maxW="300px" backgroundColor={"white"}borderWidth={0} borderRadius={10} onChangeText={handleChange} placeholder="Tell People Specifialy what you offer" />
            <Box style={{marginTop:hp('1%')}}>
            <Text fontSize={"sm"}>Describe your skill {"(optional)"} </Text>
            <Input value={value} w="100%" numberOfLines={4} marginTop={hp('0.2%')} maxW="300px" backgroundColor={"white"}borderWidth={0} borderRadius={10} onChangeText={handleChange} placeholder="Tell people about your offering" />
            </Box>
            <Box style={{marginTop:hp('1%')}}>
            <Text fontSize={"sm"}>Available Locations</Text>
            <Box style={styles.backbtn}>
                <Box style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                    <Text fontSize={"sm"} fontWeight={"medium"} color={"#2EBD91"}>Select Location Prefernce</Text>
                    <AntDesign name="arrowright" size={23} color={"#2EBD91"}/>
                </Box>
            </Box>
            </Box>
        </Box>
        </NativeBaseProvider>
    )
}
export default Inputfie;
const styles=StyleSheet.create({
    back:{
        width:wp('90%'),
        backgroundColor:"#f3f5f7",
        alignSelf:'center',
        padding:wp('4%'),
        borderRadius:10,
        marginTop:hp('-4%')
    },
    backbtn:{
        width:wp('80%'),
        backgroundColor:"#fff",
        alignSelf:'center',
        padding:wp('4%'),
        borderRadius:10,
        top:6
    }

})