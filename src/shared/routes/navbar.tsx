import { useRef,useState,useEffect } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { View,Text,TouchableHighlight,Animated,StyleSheet,FlatList, ViewProps, Image } from "react-native"
import { api } from "../services/api";
import { ButtonOfGroup } from "./navbar-component";

export type GroupsType = {
  name: string;
  description: string;
  thumbUrl: string;
  thumbGif: string;
}

type RenderItemProps = {
  item: GroupsType;
  index: number;
}

export const Navbar = ({navigation,state,descriptors}:DrawerContentComponentProps) => {
  const [ groups,setGroups ] = useState<GroupsType[]>([])

  const renderItem = ({item,index}: RenderItemProps) => (
    <ButtonOfGroup item={item} selected={index === 4}/>
  );

  const fetchGroups = async () => {
    const response = await api.get("/groups") as { data:GroupsType[] }; 
    setGroups(response.data);
  }

  useEffect(() => {
    fetchGroups()
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listGroups}
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item,index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,    
  },
  listGroups:{
    zIndex: 0,
    elevation: 0,
  },
})