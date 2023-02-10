import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme";


export const styles = StyleSheet.create({
  messageContainer:{
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 5,
    marginTop: 7,
    marginHorizontal: 12,    
  },
  messageHovered:{
    backgroundColor:"#32353B"
  },
  userAvatar:{
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  messageContent:{
    flex: 1,
    maxHeight: 38,
    marginVertical:0,
    // backgroundColor: "green",
    marginHorizontal: 7,
    justifyContent: "space-between",
  },
  messageContentHeader:{
    flexDirection: "row",
    alignItems: "center",
  },
  messageContentClientText:{
    fontFamily: FONTS.Roboto.Bold,
    fontSize: 15,
    color: "#ffffff",
  },
  messageContentHourText:{
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 12,
    color: "#cccccc",
    marginLeft: 12,
  },
  messageContentText:{
    fontFamily: FONTS.Roboto.Medium,
    color: "#b3b3b3",
  },
  actionsButtonMessageContainer:{
    position: "absolute",
    right: 5,
    top: -27,
    backgroundColor: "#222222",
    borderRadius: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#777777",
  },
  actionsButtonMessage:{
    flex: 1,
    padding: 5,
  },
  actionsButtonMessageIcon:{
    alignSelf: "center",
    width: 21,
    height: 21,
  },
})