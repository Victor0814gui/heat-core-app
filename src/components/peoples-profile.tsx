import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../theme';


export function PeoplesProfile() {
  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(30).fill({ e: 1 })}
        renderItem={({ item, index }) => (
          <View style={styles.messageContainer}>
            <Image
              style={styles.imageAvatar}
              source={{ uri: "https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png" }}
            />
            <Text style={styles.messageContentNickname}>Vitin</Text>
          </View>
        )}
      />
    </View>
  );
}

const imageAvatarSize = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 270,
    backgroundColor: COLORS.grey_180,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 21,
    marginVertical: 3,
  },
  imageAvatar: {
    height: imageAvatarSize,
    width: imageAvatarSize,
    borderRadius: imageAvatarSize / 2,
    marginRight: 12,
  },
  messageContentNickname: {},
})