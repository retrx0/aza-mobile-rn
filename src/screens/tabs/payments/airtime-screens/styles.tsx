import { StyleSheet, StatusBar, Platform, Appearance } from "react-native";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";

export const AIrtimeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginLeft: hp(20),
    fontFamily: "Euclid-Circular-A",
    fontWeight: "400",
    fontSize: hp(16),
    marginTop: hp(30),
  },
  input: {
    marginLeft: 20,
    width: "90%",
    borderBottomWidth: 1,
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
  select: {
    width: "90%",
    marginLeft: hp(20),
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
  },
  header: {},
});
