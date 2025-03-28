import { StyleSheet, StatusBar, Platform, Appearance } from "react-native";
import { hp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";

export const PaymentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: hp(30),
  },
  icon: {
    alignSelf: "flex-end",
    width: 28,
    height: 28,
    backgroundColor: "transparent",
    position: "absolute",
    right: 0,
    marginRight: 20,
  },
  headerText: {
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
  },
  subHead: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 14,

    backgroundColor: "transparent",
    marginBottom: hp(10),
  },
  imageIcon: {
    width: 58,
    height: 58,
  },
  imageHeaderContainer: {
    backgroundColor: "transparent",
    marginBottom: hp(25),
  },
  itemListContainer: {
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export const CharityStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
    width: "100%",
  },
  detailContainer: {
    flexDirection: "row",
    width: "90%",
    // marginLeft: "auto",
    // marginRight: "auto",
    // justifyContent:'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: hp(16),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A-Medium",
  },
  input: {
    marginLeft: 20,
    width: "90%",
    borderBottomWidth: 0.3,
    height: 40,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  label: {
    marginLeft: 20,
    fontSize: hp(19),
    fontWeight: "500",
  },
  suggestions: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",

    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  mainSuggestion: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A6A6A6",
  },
  amount: {
    color: "#A6A6A6",
    fontSize: hp(14),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A",
  },
  buttons: {
    marginTop: "auto",
    width: "100%",
  },
  check: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginBottom: 10,
  },
  cancel: {
    textAlign: "center",
    color: "#FF361A",
    borderBottomColor: "#FF361A",
    borderBottomWidth: 1,
    width: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },

  mainInput: {
    marginTop: 0,
  },
});
