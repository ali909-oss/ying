import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, ImageBackground, FlatList } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider, Center } from "native-base";

const Data = [
    {
        id: 1,
        title: 'Web Development'
    },
    {
        id: 2,

        title: 'Fitness Classes'
    },
    {
        id: 3,

        title: 'Cooking'
    },

    {
        id: 4,

        title: 'Transportation'
    },
    {
        id: 5,

        title: 'Grocery'
    },
]

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)

    return `#${randomColor}`;
};
const SkillsList = () => {
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);

    return (
        <NativeBaseProvider>
            <Text style={styles.texta}>Featured skils on Ying</Text>
            <Box style={{
}}>
                {/* <FlatList
        data={Data}
        renderItem={({item}) => (
          <Box style={[styles.back, {backgroundColor: generateColor()}]}>
            <Text style={styles.title}>{item.title}</Text>
          </Box>
        )}
        keyExtractor={item => item.id}
      /> */}
                {Data.map((data, index,) => {
                    return (
                        <TouchableOpacity onPress={() => { SetStatusfunc(data.title) }}>
                            <Box
                                style={[
                                    Status === data.title ? styles.cont : styles.mainview,
                                ]}>
                                <Box alignSelf={'center'} style={styles.back}>
                                    <Text style={{ fontSize: 17, color: "#4657c7" }}>{data.title}</Text>
                                </Box>
                            </Box>

                        </TouchableOpacity>
                    )
                })
                }
            </Box>


        </NativeBaseProvider>
    )
}
export default SkillsList;
const styles = StyleSheet.create({
    back: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,

        marginBottom: hp('2%'),
        width: wp('80%'),
        alignSelf: 'center',
        backgroundColor: '#e6e8f7'


    },
    cont:{
        

       
        



    },
    texta:{
        fontSize:14,
        textTransform: 'uppercase',
        textAlign:"center"
    }

})