import { Appearance, Platform, StyleSheet, StatusBar } from "react-native";
import Colors from "../../constants/Colors";

const CommonStyles = StyleSheet.create({
  // container: {
  //   position: "absolute",
  //   alignSelf: "center",
  // },
  //Grid
  row: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  col: {
    flexDirection: "column",
    alignSelf: "center",
    // margin: 5,
    // padding: 5,
  },
  //Texts
  headerText: {
    padding: 5,
    margin: 4,
    fontWeight: "500",
    fontSize: 24,
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 15,
  },
  bodyText: {
    padding: 5,
    margin: 0,
    fontFamily: "Euclid-Circular-A",
    // marginBottom: hp(56),
    // marginTop: hp(40),
    marginLeft: 15,
  },
  centerText: {
    textAlign: "center",
  },
  // Shadows
  raised: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 5,
  },
  //Other
  separator: {
    marginVertical: 10,
    height: 1,
    width: "90%",
    alignSelf: "center",
  },
  //for testing only!
  outlineThisComponent: {
    borderColor: "red",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    position: "absolute",
    alignSelf: "center",
  },
  parentContainer: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  imageHeaderContainer: {
    marginLeft: 20,
    minHeight: 70,
    maxHeight: 100,
  },
});

export default CommonStyles;
