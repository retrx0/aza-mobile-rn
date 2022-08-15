import { Appearance, Platform, StyleSheet,StatusBar } from "react-native";
import Colors from "../../constants/Colors";

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
  //Other
  separator: {
    marginVertical: 30,
    height: 1,
    width: "90%",
    alignSelf: "center",
  },
  //for testing only!
  outlineThisComponent: {
    borderColor: "red",
    borderWidth: 1,
  },
  container:{
    flex:1,
    backgroundColor:Appearance.getColorScheme()=='light'?Colors.light.background:Colors.dark.background,
    paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0,
   
   },
   imageHeaderContainer:{
    marginLeft:20,
    minHeight:70,
    maxHeight:100

    }
});

export default CommonStyles;
