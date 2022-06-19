import React from "react";
import { StyleSheet, TouchableOpacity, Text ,ImageBackground,} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider,Center ,Image,KeyboardAvoidingView} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import BitmapTextthree from "../components/Bitmap/BitmapText3";
import SearchField from "../components/Bitmap/Searchbar";
import SkillsList from "../components/Bitmap/SkillsList";


const Bitmapthree = () => {

  return (
    <NativeBaseProvider>
        <Box  style={styles.container}>

        <Feather name="arrow-left" size={30} style={{marginTop:hp('3%'),padding:wp('5%')}}/>
        <Center>
      <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="sm" borderRadius={20} />
    </Center>
              <BitmapTextthree/>
              <SearchField/>
              <SkillsList/>
        </Box>
        
        </NativeBaseProvider>
  )}
  export default Bitmapthree;

  const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        backgroundColor:'#fff',
        height:hp('100%')

        
    },
})