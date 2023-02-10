import { useState,useEffect } from "react";
import { View,useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { LeftNavBarList } from '../../components/left-navbar';
import { RightNavBarList } from '../../components/right-navbar';
import { ListHeaderComponent } from '../../components/header-double-list';
import { Chat } from '../../components/chat';
import { api } from "../../../../shared/services/api";


export const Home = () => {
  const { width } = useWindowDimensions();
  const [ messages,setMessages ] = useState([]);

  console.log("[Home]-atualizou")

  const fetchMessages = async () => {
    const response = await api.get("/messages");
    setMessages(response.data);
  }

  useEffect(() => {
    fetchMessages();
  },[])

  return (
    <View style={styles.container}>
      <LeftNavBarList/>
      <View style={{flex: 1,}}>
        <ListHeaderComponent/>
        <View style={{flexDirection: "row",flex: 1}}>
          <Chat messages={messages}/>
          {width > 980 && <RightNavBarList/>}
        </View>
        </View>
    </View>
  );
}