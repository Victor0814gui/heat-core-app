import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme";

const indicatorNewMessageSize = 8;

export const styles = StyleSheet.create({
  leftNavbarContentList:{
    maxWidth: 240,
    width: "100%",
    height: "100%",
    backgroundColor: "#2F3136",
  },
  headerContainer:{},
  headerTop:{
    flexDirection: "row",
  },
  headerBottom:{
    flexDirection: "row",
  },
  sectionTitle:{
    fontFamily: FONTS.Poppins.poppinsMedium,
    marginLeft: 7,  
  },
  buttonDiscordRoomContainer:{
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  buttonDiscordRoom:{
    alignSelf: "stretch",
    flex: 1,
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 4,
    borderRadius: 5,
  },
  buttonDiscordRoomText:{
    color: "#b3b3b3",
    fontFamily: FONTS.Roboto.Medium,
  },
  indicatorNewMessage:{
    width: indicatorNewMessageSize / 2,
    height: indicatorNewMessageSize,
    borderTopRightRadius: indicatorNewMessageSize / 2,
    borderBottomRightRadius: indicatorNewMessageSize / 2,
    backgroundColor: "#ffffff",
  },
  userControls:{
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 9,
    backgroundColor: "#292B2F",
    alignItems: "center",
  },
  clientAvatar:{
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  nicknameText:{},
  clientStatus:{},
  icon:{
    width: 24,
    height: 24,
  },
})

