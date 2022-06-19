import React from "react";
import { Box, NativeBaseProvider,Center,Input,KeyboardAvoidingView } from "native-base";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";
import { Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';





import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchField = () =>{
    return(
        
        <NativeBaseProvider>
                    <KeyboardAvoidingView>

            <Center>
            <Input placeholder="Search for a skill here..." variant="filled" width="70%" marginTop={hp('1%')} borderRadius="10" py="1"  px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}  />
            </Center>
            </KeyboardAvoidingView>

        </NativeBaseProvider>
    )
}
export default SearchField;
const styles=StyleSheet.create({

})