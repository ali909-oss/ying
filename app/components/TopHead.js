import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar,TouchableOpacity} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from "../config/colors";
import {useNavigation} from '@react-navigation/native';





export const BANNER_H = 300;
const TOPNAVI_H = 50;


const TopNavigation = (props) => {
    const navigation = useNavigation();

  const safeArea = useSafeArea();

  const {title, scrollA} = props;

  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
          <AntDesign name="arrowleft" size={23} color={colors.default} style={styles.icon(isTransparent)}/> 
          </TouchableOpacity>
        <Text style={styles.title(isTransparent)}>{title}</Text>
        <View></View>
        </View>
      </View>
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: isTransparent => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: isTransparent ? '#FFF' : '#000',
  }),
  icon: isTransparent => ({
    fontWeight: 'bold',
    fontSize: 22,
    color: isTransparent ? '#FFF' : '#000',
  }),
};

export default TopNavigation;