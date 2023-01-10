import { useEffect,useState,useRef } from "react";

import { 
  View,
  Image,
  Animated,
  StyleSheet,
} from "react-native";

import LogoImage from "../assets/images/SplashScreen.scale-200.png";


export function SplashScreen(){
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start(({finished}) => {
      fadeOut()
    });
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start(({finished}) => {
      fadeIn()
    });
  };


  useEffect(() => {
    fadeIn();
    setTimeout(() => {

    },2000)
  },[])


  return(
    <View style={styles.container}>
      <Animated.View
        style={{
          transform:[
            {
              scale: fadeAnim,
            }
          ]
        }}
      >
        <Image
          source={LogoImage}
          style={{
            width: 88,
            height: 88,
          }}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})