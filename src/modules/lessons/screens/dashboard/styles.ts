import { StyleSheet } from "react-native-windows";
import { FONTS } from "../../../../shared/theme";


export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  title: {
    fontFamily: FONTS.Poppins.poppinsMedium,
    fontSize: 16,
    color: "#333333",
    fontWeight: "600",
  },
  button:{
    paddingHorizontal: 21,
    height: 42,
    backgroundColor: "#4DD0E1",
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  content:{
  },
  contentText:{
    fontSize: 21,
    fontWeight: "500",
    fontFamily: FONTS.Roboto.Medium,
    textAlign: "center",
  },
  contentDescription:{
    fontFamily: FONTS.Roboto.BlackItalic,
    marginTop: 8,
    color: "#999999",
    maxWidth: 500,
    alignSelf: "center",
    textAlign: "center",
  },
})