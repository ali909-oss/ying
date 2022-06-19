import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, ImageBackground, Pressable } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';



const AddImage = () => {
    const [pickedImagePath, setPickedImagePath] = useState('https://cdn-icons-png.flaticon.com/512/179/179378.png');

    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
      // Ask the user for the permission to access the media library 
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      // Explore the result
      console.log(result);
  
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
      }
    }
    return (
        <Box style={styles.container}>
            <TouchableOpacity onPress={showImagePicker}>
            <Box  style={styles.back}>
            {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }

            </Box>
            </TouchableOpacity>
            <Text style={styles.textd}>TAP ON ICON ABOVE </Text>

        </Box>
    )
}
export default AddImage;
const styles = StyleSheet.create({
    container:{
        height:hp('100%'),
        width:wp('100%'),

      alignItems:"center",
      justifyContent:'center',
      

    },
    image:{
        width: wp('28%'),
        height: hp('14%'),
        borderRadius: 20,
        resizeMode:"cover"
        


    },
    back: {
        width: wp('28%'),
        height: hp('14%'),
        elevation: 3,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:hp('2%')
    },
    textd:{
        color:'grey',
        fontWeight:'700',
        
        fontSize:13,
        marginTop:hp('2%')
    }

})