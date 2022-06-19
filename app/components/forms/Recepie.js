import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";



const Data = [
    {
        id: 1,
        image: require("../../assets/images/biryani.jpg"),

        title: "Crispy Fried Chicken",
        time: "1 hr"

    },
    {
        id: 2,
        image: require("../../assets/images/biryani.jpg"),

        title: "Crispy Fried Chicken",
        time: "1 hr"

    },
    {
        id: 3,
        image: require("../../assets/images/fried.jpg"),

        title: "Grilled Chicken",
        time: "35 min"

    },
    {
        id: 4,
        image: require("../../assets/images/biryani.jpg"),

        title: "Chicken Curry",
        time: "16 min"

    },
    {
        id: 5,
        image: require("../../assets/images/biryani.jpg"),

        title: "Chicken Biryani",
        time: "1 hr"

    },
    {
        id: 6,
        image: require("../../assets/images/biryani.jpg"),

        title: "Crispy Fried Chicken",
        time: "1 hr"

    }
]

const Receipe = () => {
    const navigation = useNavigation();
    const [recepieData, setrecepieData] = useState([]);

    // console.log("eee",recepieData.recipes)
    // {
    //     recepieData.map((data) => {
    //         console.log(data)
    //     })
    // }


    
    useEffect(() => {
        const getresult = async () => {
            const response = await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk', {
                params: {ids: '456,987,321'},
   
            headers: {
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '72c09bbfbdmshcc475a0883416d0p1f626cjsne41fb8e2122d'
                }
    
            })
            console.log("Some data here", response.data)
            setrecepieData(response.data)
            // console.log(response.data.recipes.length , recepieData[0].title)
    
        }
    
        getresult()
    }, [])

    const [selectedIndex, setSelectedIndex] = useState([]);
    const selectItem = (index) => {
        if (selectedIndex.indexOf(index) > -1) {
            let newArray = selectedIndex.filter((indexObject) => {
                if (indexObject == index) {
                    return false;
                }
                return true;
            })
            setSelectedIndex(newArray);
        } else {
            setSelectedIndex([
                ...selectedIndex, index
            ]);
        }

    };
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: hp('75%') }}
            >
                <View style={{
                    marginTop: hp("3%"), flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
                    alignItems: 'center',

                }}>

                    {                    
                        
                        recepieData.length == 0 ? <View>

                            <Text>Loading please fuck u</Text>
                        </View> :

                          (  recepieData.map((data)=>{
                                                return(
                                                    <View>
                                                    <TouchableOpacity onPress={() => navigation.navigate("ReceipeDetail", { itemData: data })}>
                                                        <View style={styles.main}>
                                                            <Image source={{uri : data.image}} style={styles.image1} />
                                                           

                                                            <Text style={styles.title}>{data.title}</Text>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%'), padding: 5 }}>
                                                                <Entypo name="clock" size={23}

                                                                />
                                                                <Text>{data.readyInMinutes}</Text>
                                                                <View></View>


                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                    </View>


                                                )
                            }



                               ) )
                    }
                </View>
            </ScrollView>

        </View>

    )
}
export default Receipe;
const styles = StyleSheet.create({
    main: {
        elevation: 2,
        borderRadius: 15,
        width: wp('45%'),
        alignSelf: 'center',
        marginBottom: hp('2%')
    },
    image1: {
        width: wp('45%'),
        height: hp('12%'),
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5



    },
    title: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: hp('3%')
    },
    clock: {
        width: wp('8%'),
        height: hp('4%')
    }

})