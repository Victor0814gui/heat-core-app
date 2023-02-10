import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme";

const indicatorNewMessageSize = 8;

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    backgroundColor:"#36393F",
  },
  messageContainer:{
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 5,
    marginTop: 7,
    marginHorizontal: 12,
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
})