import { useState,useEffect,useRef, memo } from 'react';
import { SectionList,Text, View,Image } from 'react-native';
import { angleDown,multiply } from "../../../../shared/assets/icons";
import { styles } from './styles';
import { TouchableHighlight } from 'react-native-windows';
import { 
  microphoneSlash,
  questionCircle,
  bellSlash,
  setting
} from "../../../../shared/assets/icons";
const comminityBradingUrl = "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

//@ts-ignore
const LeftNavbarItem = ({item,index}) => {
  const [ onHover,setOnHover ] = useState(false);

  return (
    <View style={styles.buttonDiscordRoomContainer}>
      <View style={styles.indicatorNewMessage}/>
      <TouchableHighlight
        underlayColor={"#2b2b2b"}
        onPress={() => {}}
        style={[
          styles.buttonDiscordRoom,
          onHover && {backgroundColor: "#4c5058"}
        ]}
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <Text style={styles.buttonDiscordRoomText}>{item}</Text>
      </TouchableHighlight>
      <View style={[styles.indicatorNewMessage,{backgroundColor: 'transparent'}]}/>
    </View>
  )
}


const LeftNavBarListComponent = () => {

  //@ts-ignore
  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  )

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>    
      <Image
        source={{uri:comminityBradingUrl}}
        resizeMode='contain'
        style={{width: 80,height:80}}
      />
      <View style={styles.headerBottom}>
        <Text>Conferir Canais</Text>
        <View style={{width: 2,backgroundColor: "black"}}/>
        <Text>Rules</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.leftNavbarContentList}>
      <View style={styles.headerTop}>
        <Image style={styles.icon} source={multiply} />
        <Text>Community</Text>
        <Image style={[styles.icon,{marginLeft: "auto"}]} source={angleDown} />
      </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={LeftNavbarItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.userControls}>
        <Image style={styles.clientAvatar} resizeMode="contain"  source={{uri: "https://avatars.githubusercontent.com/u/92493696?v=4"}}/>
        <View>
          <Text style={styles.nicknameText}>Victor0814gui</Text>
          <Text style={styles.clientStatus}>codando...</Text>
        </View>
        <Image source={microphoneSlash} style={styles.icon}/>
        <Image source={microphoneSlash} style={styles.icon}/>
        <Image source={setting} style={styles.icon}/>
      </View>
    </View>
  )
}

export const LeftNavBarList = memo(LeftNavBarListComponent);