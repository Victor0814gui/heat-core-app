import { StyleSheet } from "react-native-windows";
import { COLORS, FONTS } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
  },
  button: {
    paddingHorizontal: 21,
    height: 42,
    backgroundColor: COLORS.orange_600,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  buttonHovered: {
    backgroundColor: COLORS.orange_450,
  },
  buttonPressed: {
    backgroundColor: COLORS.orange_350,
  },
  buttonText: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
    color: "#333333",
  },
  content: {
    marginRight: 120,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.Poppins.poppinsMedium
  },
  subtitle: {
    fontFamily: FONTS.Poppins.poppinsMedium
  },
  subtitleBold: {},
  input: {
    height: 41,
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderTopColor: "red",
    borderColor: COLORS.bleu_300,
    fontFamily: FONTS.Roboto.Medium,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },
  ticketContainer: {
    width: 300,
    // height: 160,
    borderRadius: 21,
    backgroundColor: "#444444",
    position: "relative",
    paddingVertical: 12,
    // borderColor: COLORS.white,
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // marginTop: 100,
    // border: [15, 'solid', 'green'],
    // boxShadow: '10px 10px 20px blue',
    // transition: ['shadowColor', 3000],
  },
  ticketSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingVertical: 4,
  },
  separator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  dot: {
    height: 30,
    width: 15,
    backgroundColor: COLORS.grey_180,
    // borderRadius: 19,
  },
  separatorDashed: {
    maxHeight: 0,
    borderWidth: 1,
    borderStyle: 'dashed',
    // borderColor: COLORS.white,
    flex: 1,
  },
  left: {
    // left: -19,
    // top: "40%",
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15
  },
  right: {
    // right: -15,
    // top: "40%",
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15
  },
  ticketTitle: {
    color: COLORS.white,
    fontFamily: FONTS.Poppins.poppinsMedium,
  },
  ticketSubtitle: {
    color: COLORS.white,
    fontFamily: FONTS.Poppins.poppinsMedium,
    maxWidth: "70%",
  },
  contentText: {
    fontSize: 21,
    fontWeight: "500",
    fontFamily: FONTS.Roboto.Medium,
    textAlign: "center",
  },
  contentDescription: {
    fontFamily: FONTS.Roboto.BlackItalic,
    marginTop: 8,
    color: "#999999",
    maxWidth: 500,
    alignSelf: "center",
    textAlign: "center",
  },
  ilustrations: {
    height: 120,
    width: 120,
  },
})