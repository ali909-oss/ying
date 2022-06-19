import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../config/colors';





function Header({title, onPress}) {
  return (
    <View style={styles.container}>
     
    
      <View style={styles.header}>

      <TouchableOpacity onPress={onPress}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
       
        <Text style={styles.titleText}>{title}</Text>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    backgroundColor:colors.default,
    height:hp('15%')
  },
  image: {
    height: hp('10%'),
    width:wp('100%'),
    resizeMode:"stretch"
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: wp('5%'),
    alignItems: 'center',
    marginTop:hp('4%')

  },
  
  titleText: {
    color:'#fff',
    fontWeight:'bold',

    fontSize: 20,
  },
});

export default Header;
