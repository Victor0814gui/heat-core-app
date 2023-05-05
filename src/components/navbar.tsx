


import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../theme';


export function Navbar() {


  const renderItem = () => (
    <View style={styles.serverItem} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(10).fill({ e: 1 })}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 70,
    backgroundColor: COLORS.grey_130,
  },
  list: {
    alignItems: "center",
  },
  serverItem: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 4,
    backgroundColor: COLORS.grey_300,
  }
})