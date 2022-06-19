import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../config/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import Receipe from "../components/forms/Recepie";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "@gorhom/bottom-sheet";





export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Bitmapfive")}>
        <Text style={styles.texta}>Pakistani Recipes</Text>
        </TouchableOpacity>
        <View style={{marginTop:hp('2%')}}>
        <SearchBar/>
        </View>
</View>
     <Receipe/>
      </View>


  );
}
const styles = StyleSheet.create({
  container:{
    width:wp('100%'),
    height:hp('98%'),
  
},
  header: {
    width: wp('100%'),
    height: hp('20%'),
    backgroundColor: colors.default,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },
  texta: {
    alignSelf: 'center', 
    fontSize: 18,
    color: '#fff',
    marginTop: hp('5%'),
    fontWeight: 'bold'
  }
});
