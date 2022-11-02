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
    marginTop: 45,
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
    fontSize: hp(17),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
  subHead: {
    marginTop: 40,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    backgroundColor: "transparent",
  },
  imageIcon: {
    width: 58,
    height: 58,
  },
  imageHeaderContainer: {
    marginLeft: 20,
    minHeight: 70,
    maxHeight: 100,
    backgroundColor: "transparent",
  },
  itemListContainer: {
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 10,
    backgroundColor: "transparent",
    flex: 1,
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
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginLeft: 20,
    width: "90%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
  },
  label: {
    marginLeft: 20,
  },
  suggestions: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
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
