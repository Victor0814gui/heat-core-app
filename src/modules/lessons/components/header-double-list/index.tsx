import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image
} from "react-native";
import { FONTS } from "../../../../shared/theme";
import {
  bellSlash,
  questionCircle,
  message,
  multiply,
  commentDots,
  inbox,
  usersAlt,
} from "../../../../shared/assets/icons";


const text = "Canal utilizado para falar de assuntos do mundo de programação, carreira e para fazer networking com milhares de devs como você. Se você tiver dúvidas técnicas o ideal é utilizar os canais específicos de cada uma. Para ter acesso execute o comando /techs"

export const ListHeaderComponent = ():JSX.Element => {

  const inputRet = useRef<TextInput>(null);
  
  return (
    <View 
      style={styles.header}
    >
      <View style={styles.containerSectionsHeader}>
        <View style={styles.icon}/>
        <Image source={questionCircle} style={styles.icon}/>
        <View style={styles.circleSeparator}/>
        <Text style={styles.chanelTagText}>geral</Text>
      </View>
      <View style={{flex: 2.3}}>
        <Text ellipsizeMode="middle" numberOfLines={1} style={styles.chanelDescription}>{text}</Text>
      </View>
      <View style={styles.containerSectionsHeader}>
        <View style={styles.icon}/>
        <View style={styles.icon}/>
        <Image source={bellSlash} style={styles.icon}/>
        <Image source={usersAlt} style={styles.icon}/>
        <TextInput ref={inputRet} style={styles.input}/>
        <Image source={inbox} style={styles.icon}/>
        <Image source={questionCircle} style={styles.icon}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    flexDirection: "row",
    shadowColor: '#000000',
    borderBottomWidth: 1,
    paddingVertical: 7,
    zIndex: 1,
    backgroundColor:"#3b3d42",
    borderBottomColor: "#ff0000",
    shadowOffset: {
      width: 12,
      height: -12,
    },
    shadowOpacity: 12,
    shadowRadius:0.1,
    alignItems: "center",
    position: "relative"
  },
  containerSectionsHeader:{
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
    marginHorizontal: 2,
    backgroundColor: "#444444"
  },
  input:{
    height: 25,
    padding: 0,
    alignContent: "center",
    maxWidth: 300,
  },
  circleSeparator:{
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor:"#ffffff",
    marginHorizontal: 4,
  },
  chanelTagText:{
    fontFamily: FONTS.Roboto.Bold,
    marginRight: 4,
  },
  chanelDescription:{
    fontFamily: FONTS.Roboto.Medium,
  },
})
 
 