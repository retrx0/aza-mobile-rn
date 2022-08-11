import { StyleSheet } from "react-native";
import { grey } from "../colors";
import { hp } from "../utils";

const CommonStyles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
  },
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
    color: "#121212",
    fontWeight: "500",
    fontSize: 24,
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 15,
  },
  bodyText: {
    padding: 5,
    margin: 4,
    fontFamily: "Euclid-Circular-A",
    color: grey,
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
});

export default CommonStyles;
