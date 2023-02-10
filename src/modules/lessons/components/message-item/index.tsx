import { useState,useCallback, memo } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import { questionCircle,multiply} from "../../../../shared/assets/icons"
import { styles } from "./styles";

type MessageType = {
  avatarUrl?: string;
  name: string;
  message: string;
  createAt: string;
  id: string;
}

type MessageItemProps = {
  item: MessageType;
  index:number;
  previousMessage: {
    createAt: string;
  }
}

const ActionButton = memo(() => {
  return (
    <View style={styles.actionsButtonMessageContainer}>
    <TouchableHighlight style={styles.actionsButtonMessage}>
      <Image resizeMode="contain" source={questionCircle} style={styles.actionsButtonMessageIcon}/>
    </TouchableHighlight>
    <TouchableHighlight style={styles.actionsButtonMessage}>
      <Image resizeMode="contain" source={multiply} style={styles.actionsButtonMessageIcon}/>
    </TouchableHighlight>
    <TouchableHighlight style={styles.actionsButtonMessage}>
      <Image resizeMode="contain" source={questionCircle} style={styles.actionsButtonMessageIcon}/>
    </TouchableHighlight>
  </View>
  )
})


export const MessageItem = ({
  item,
  index,
  previousMessage,
}:MessageItemProps) => {
  const [ onHover,setOnHover ] = useState(false);


  const onMouseEnter = () => {
    setOnHover(true)
  };

  const onMouseLeave = () => {
    setOnHover(false)
  };

  return (
    <View
    //@ts-ignore
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={[
      styles.messageContainer,
      onHover && styles.messageHovered
    ]}>
    <Image
      source={{uri: item.avatarUrl}}
      resizeMode='contain'
      onError={({nativeEvent: {error} }) => console.log(error)}
      style={styles.userAvatar}
    />
    <View style={styles.messageContent}>
      <View style={styles.messageContentHeader}>
        <Text style={styles.messageContentClientText}>{item.name}</Text>
        <Text style={styles.messageContentHourText}>Hoje as {item.createAt}</Text>
      </View>
      <Text style={styles.messageContentText}>{item.message}</Text>
    </View>
    {onHover && <ActionButton/>}
  </View> 
  )
}