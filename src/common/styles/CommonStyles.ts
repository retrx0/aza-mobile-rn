import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
  //Grid
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    // margin: 5,
    // padding: 5,
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
  },
  bodyText: {
    padding: 5,
    margin: 4,
    fontFamily: "Euclid-Circular-A",
    color: "#4d4d4d",
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
  //for testing only!
  outlineThisComponent: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default CommonStyles;
