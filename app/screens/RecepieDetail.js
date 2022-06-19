import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity ,Animated, ScrollView} from "react-native";
import React, { useState, useEffect ,useRef} from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Header from "../components/Header";
import colors from "../config/colors";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigation from "../components/TopHead";

const BANNER_H = 300;

const productDetail =[
    {
        desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
]

const Ingredients=[
    {
        name:'Oil',
        quantity:'2 tbsp'

    },
    {
        name:'Onion',
        quantity:'2 medium size'

    },
    {
        name:'Salt',
        quantity:'1 tbsp'

    },
    {
        name:'Water',
        quantity:'1 cup'

    },
    {
        name:'Red Chillie',
        quantity:'2 tspn'

    },

    
]

const Method =[
    {
        id:1,
    detail :'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
},


]


const ReceipeDetail =({route}) =>{
    const itemData = route.params.itemData;
    const navigation = useNavigation();
    const scrollA = useRef(new Animated.Value(0)).current;


   



    return(
        <SafeAreaProvider>

        <View style={styles.container}>
            {/* <Header  title="Receipe Detail" onPress={() => navigation.navigate("HomeScreen")} /> */}
            <TopNavigation title={itemData.title} scrollA={scrollA} />

<Animated.ScrollView
 onScroll={Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollA}}}],
    {useNativeDriver: true},
  )}
  scrollEventThrottle={16}
 

>
<Animated.Image source={{uri : itemData.image}} style={styles.banner(scrollA)} />



             <View style={styles.main}>
            <View style={styles.titleback}>
            <Text style={styles.title}>{itemData.title}</Text>
            </View>
            {productDetail.map((data)=>{
                                return(
            <Text style={styles.desc}>{data.desc}</Text>
                                )
            }
            )}
            </View>
            <View style={styles.main}>
            <View style={styles.titleback}>
            <Text style={styles.title}>Ingredients</Text>
            </View>
            {
                Ingredients.map((item, index) => {
                    return (
                        <View style={{ padding: wp('2%'),margin:2 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>{item.name}</Text>
                                <Text style={styles.texta}>{item.quantity}</Text>
                            </View>
                           
                           
                        </View>
                    )
                })
            }
            </View>
            <View style={styles.main}>
            <View style={styles.titleback}>
            <Text style={styles.title}>Method</Text>
            </View>
            {Method.map((data,index)=>{
                                return(
                                    <View style={{ padding: wp('1%'),margin:2 }}>
                                        <Text style={styles.texta} > {itemData.instructions}</Text>
                                       





                                    </View>

                                )
            }
            )}
            </View>
            </Animated.ScrollView>

        </View>
        </SafeAreaProvider>

    )
}
export default ReceipeDetail;
const styles =StyleSheet.create({
    container:{
        width:wp('100%'),
        flex:1

    },
    banner: scrollA => ({
        height: BANNER_H,
        width: '100%',
        transform: [
          {
            translateY: scrollA.interpolate({
              inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
              outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
            }),
          },
          {
            scale: scrollA.interpolate({
              inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
              outputRange: [2, 1, 0.5, 0.5],
            }),
          },
        ],
      }),
    main:{
        width:wp('95%'),
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        alignSelf:'center',
        elevation:2,
        backgroundColor:'#fff',
        marginTop:hp('2%'),
        marginBottom:hp('1%')
    },
    titleback:{
        width:wp('95%'),
        backgroundColor:colors.default,
        borderRadius:10,

    },
    image1:{
        width:wp('60%'),
        height:hp('30%'),
        alignSelf:'center',
        borderRadius:30,
        marginTop:hp('2%')

    },
    title:{
        fontSize:16,
        color:'#fff',padding:10,
        fontWeight:'bold'
    },
    desc:{
        padding:8,
        fontSize:14
    },
    texta:{
        fontSize:15
    }

})