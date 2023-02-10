import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme";

const indicatorNewMessageSize = 8;

export const styles = StyleSheet.create({
  list:{
    maxWidth: 240,
    backgroundColor: "#2F3136",
    paddingHorizontal: 5,
  },
  headerTitle:{
    fontSize: 16,
    fontFamily: FONTS.Roboto.Regular,
    marginVertical: 4,
  },
  buttonContactContainer:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingTop: 7,
    marginTop: 7,
  },
  userNameText:{
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 16,
  },
  hourText:{
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 13,
  },
})

