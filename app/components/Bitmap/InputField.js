import React,{useState} from 'react';
import { Text ,StyleSheet} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { TextArea,Box, NativeBaseProvider } from "native-base";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";




const InputText = () => {

    const [textAreaValue, setTextAreaValue] = useState("");

    const demoValueControlledTextArea = e => {
      setTextAreaValue(e.currentTarget.value);
    };
  
  return (
    <NativeBaseProvider>
      
    <Box
    style={styles.container}
     >
      <Box alignItems="center" w="80%" alignSelf={"center"} borderWidth={10} borderRadius={10} borderColor="#f3f5f7">
      <TextArea value={textAreaValue} numberOfLines={4} placeholder={"Tell us about Yourself"} onChange={demoValueControlledTextArea}    />
    </Box>
    </Box>
    </NativeBaseProvider>
  );
}

export default InputText;
const styles=StyleSheet.create({
    

})