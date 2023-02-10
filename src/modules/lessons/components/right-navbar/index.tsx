import { useState,useEffect,useRef, memo } from 'react';
import { SectionList,Text, View,Image, FlatList, Dimensions, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../../shared/theme';

type SectionStatusUsersType = {
  avatarUrl: string;
  nuckName: string;
  status: string;
}

type DataStatusUsersType = {
  title: string;
  sectionData: SectionStatusUsersType;
}

const communityBradingUrl = "https://avatars.githubusercontent.com/u/92493696?v=4"

const sectionData = new Array(10).fill({
  avatarUrl: communityBradingUrl,
  nuckName: "vguilherme0814",
  status: "codadando..."
})

const dataStatusUsers = new Array(20).fill({
  title: "section title",
  data: sectionData
});

const RightNavbarItem = ({item,index}:{item: SectionStatusUsersType,index: number}) => {
  const [ onHover,setOnHover ] = useState(false);

  return (
    <View style={styles.buttonContactContainer}>
      <Image
        source={{uri: item.avatarUrl}}
        style={{width: 32,height: 32,borderRadius: 16}}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.userNameText}>asdfasdfasdf</Text>
        <Text style={styles.hourText}>asdfasdfasdf</Text>
      </View>
    </View>
  )
}



export const RightNavBarListComponent = () => {

  const renderItem = ({item,index}:{item:SectionStatusUsersType,index:number}) => (
    <RightNavbarItem index={index} item={item}/>
  )

    //@ts-ignore
  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.headerTitle}>{title}</Text>
  )

  console.log("[RightNavBarListComponent]-[atualizou]")
  return (
    <SectionList
      windowSize={15}
      style={styles.list}
      sections={dataStatusUsers}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      showsVerticalScrollIndicator={false}
    />
  )
}

export const RightNavBarList = memo(RightNavBarListComponent);