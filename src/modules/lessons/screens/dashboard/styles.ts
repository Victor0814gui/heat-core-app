import { StyleSheet } from "react-native";
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
    color: "#1E1E1E",
    fontWeight: "600",
  },
  button:{
    width: 200,
    height: 41,
    backgroundColor: "#25DA67",
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
    fontFamily: FONTS.Roboto_Slab.ExtraLight,
    marginTop: 8,
    color: "#999999",
    maxWidth: 500,
    alignSelf: "center",
    textAlign: "center",
  },
})