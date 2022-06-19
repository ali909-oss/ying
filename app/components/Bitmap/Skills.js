import React, { useState } from "react";
import { StyleSheet, TouchableOpacity ,ImageBackground,View} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center,Text ,Image,KeyboardAvoidingView,Input} from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';

const Skills =() =>{
    const [skill,setSkill]=useState('Soup');
    const [desc,setDesc]=useState("Soup with onions,kale,carrots and noodels")
    return(
        <NativeBaseProvider>
            <Box style={styles.back}>

                <Box style={styles.backitem}>
                <Box style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <Box style={{flexDirection:'column',ml}}>

                <Text fontSize={"lg"} fontWeight={"bold"}>{skill}</Text>
                <Text fontSize={"sm"} color={"#cfd2d6"} padding={wp('1%')}>{desc}</Text>
                </Box>
                <Box style={styles.line}/>
                <Box >
                    <Text    fontSize={"sm"} padding={wp('2%')}    color={'#44C983'}
>Edit Skill</Text>
                </Box>
                </Box>
                </Box>

            </Box>
        </NativeBaseProvider>
    )
}
export default Skills;
const styles=StyleSheet.create({
    back:{
        width:wp('90%'),
        backgroundColor:"#f3f5f7",
        alignSelf:'center',
        padding:wp('3%'),
        borderRadius:10,
    },
    backitem:{
        width:wp('85%'),
        backgroundColor:"#fff",
        alignSelf:'center',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        top:6
    },
   
    line:{
        height: '100%',
        width: 2,
        backgroundColor: '#f3f5f7',
    }

})