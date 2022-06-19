import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text ,ImageBackground} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const Welcomescreen = () => {
  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={["#14aea1", "#28b995", "#35c18e"]}
        style={styles.gradient}
      >
        <Box style={styles.container}>
          <Image
            style={styles.image1}
            source={require("../assets/images/pattern.png")}
          />

          <Text style={styles.welcome}>Welcome!</Text>
          <ImageBackground
                        style={styles.imgBackground}
                        source={require("../assets/images/stars.png")}

                    >
          <Image
            style={styles.image}
            source={require("../assets/images/checkmark.png")}
          />
          </ImageBackground>
          <Box style={{ marginTop: hp("2%") }}>
            <Text style={styles.texta}>You're in!</Text>
            <Text style={styles.textb}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </Text>
            <TouchableOpacity>
              <Text style={styles.textt}>
                E-mail not received?
                <Text style={styles.texts}> Click here to resend.</Text>
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </LinearGradient>
    </NativeBaseProvider>
  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: 'center',
    alignItems: 'center'
  },
  image1: {
    width: wp("100%"),
        position: "absolute",
        height:hp('30%'),
        top:0,
        left:0,
        alignItems:'flex-end',
        transform: [{rotate: '-180deg'}],
        marginTop:hp('2')
  },
  imgBackground: {
    width: wp('60%'),
    height: hp('30%'),
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('2%')

},
  gradient: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    width: wp("40%"),
    height: hp("20%"),
  },
  textt: {
    color: "#28292A",
    marginTop: hp("2%"),
    fontSize: 11,
    alignSelf: "center",
  },
  texts: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
  welcome: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 35,
  },
  texta: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textb: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    padding: wp("4%"),
    lineHeight: hp("3%"),
    margin: 5,
  },
  headerstyle: {
    // backgroundColor: "red",
    width: wp("100%"),
    flex: 3,
    paddingHorizontal: wp("5%"),
  },
  footerstyle: {
    backgroundColor: "#fff",
    borderTopLeftRadius: hp("2.5%"),
    borderTopRightRadius: hp("2.5%"),

    width: wp("100%"),
    flex: 7,
    top: hp("-1.5%"),

    paddingHorizontal: wp("5%"),
  },
});