import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme";


export const styles = StyleSheet.create({
  inputContainer:{
    position: "relative",
    bottom: 0,
    left: 0,
    right:0,
    zIndex: 0,
    width: "100%",
    paddingHorizontal: 12,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  input:{
    borderWidth: 0,
    borderRadius: 7,
    borderColor: "#222222",
    backgroundColor: "#222222",
    fontFamily: FONTS.Poppins.poppinsLigth,
    fontSize: 16,
    flex: 1,
    maxHeight: 340,
  },
  buttonContainerIcon:{
    width: 35,
    height: 35,
    borderRadius: 5,
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
  },
})