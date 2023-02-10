import { useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { GroupsType } from "./navbar";


const buttonOfGroupSize = 48;
const buttonOfGroupRadius = buttonOfGroupSize / 2;
const indicatorActivitySize = 10;

type ButtonOfGroupProps = {
  style?: boolean;
  selected?: boolean;
  item: GroupsType;
}

export const ButtonOfGroup = ({
  style = false,
  selected = false,
  item,
}:ButtonOfGroupProps) => {
  const [ onHover,setOnHover ] = useState(false);

  return (
    <View style={styles.containerButtonOfGroup}>
      <>
      <Animated.View 
        style={[
          styles.indicatorActivity,
          selected && {height: indicatorActivitySize + 28},
          onHover && {height: indicatorActivitySize + 12}
        ]}
      />
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="#6918b4"
        activeOpacity={0.1}
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}   
        style={[
          styles.buttonOfGroup,
          onHover && { borderRadius: buttonOfGroupRadius - 8 },
          style && { backgroundColor: "#00c853" }
        ]}
      >
        <>
          {onHover &&  <Image
            source={{uri: item.thumbGif}}
            style={styles.buttonOfGroupImageGit}
            resizeMode="cover"
          />}
        </>
      </TouchableHighlight>
      <View style={[styles.indicatorActivity,{backgroundColor: "transparent"}]}/>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  containerButtonOfGroup:{
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    // backgroundColor: "#ffffff",
    // marginVertical: 4,
  },
  indicatorActivity:{
    width: indicatorActivitySize / 2,
    height: indicatorActivitySize,
    borderTopRightRadius: indicatorActivitySize / 2,
    borderBottomRightRadius: indicatorActivitySize / 2,
    backgroundColor: "#ffffff",
  },
  buttonOfGroup:{
    backgroundColor: "blueviolet",
    width: buttonOfGroupSize,
    height: buttonOfGroupSize,
    borderRadius: buttonOfGroupRadius,
    marginVertical: 4,
    alignSelf: "center",
  },
  buttonOfGroupImageGit: {
    width: buttonOfGroupSize,
    height: buttonOfGroupSize,
    alignSelf: "center",
  }
})