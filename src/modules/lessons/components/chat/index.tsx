import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { MessageItem } from "../message-item";
import { memo, useCallback } from "react";
import { styles } from "./styles";
import { volume,message,questionCircle } from "../../../../shared/assets/icons";

type Message = {
  avatarUrl?: string;
  name: string;
  message: string;
  createAt: string;
  id: string;
}


const MessagesList = memo((props:{
  messages: Message[]
}) =>{
  const renderItem = (i:{item:Message,index:number}) => (
    <MessageItem
      item={i.item}
      index={i.index}
      previousMessage={props.messages[i.index > 0 ? i.index - 1 : i.index]}
    />
  );
  const keyExtractor = useCallback((item:Message,index:number) => `${index}`,[])

  return(
    <FlatList
      onScroll={(e) => console.log(e)}
      style={{
        marginBottom: 0,
      }}
      data={props.messages}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
})

const ButtonInputActions = (props:{
  icon?: string,
}) => {
  const [ onHover,setOnHover ] = useState(false);

  return (
    <TouchableHighlight
      style={[
        styles.buttonContainerIcon,
        {backgroundColor: onHover ? "#555555" : "transparent"}
      ]}
      onPress={() => {}}
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Image 
        source={props.icon || questionCircle}
        resizeMode="contain"
      />
    </TouchableHighlight>
  )
}


export const ChatComponent = (props:{
  messages: Message[]
}) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor:"#36393F",
    }}>
      <MessagesList messages={props.messages} />      
      <View style={styles.inputContainer}>
        <TextInput 
          multiline
          style={styles.input}
        />
        <ButtonInputActions/>
        <ButtonInputActions/>
        <ButtonInputActions/>
        <ButtonInputActions icon={message}/>
      </View>
    </View>
  )
}

export const Chat = memo(ChatComponent);