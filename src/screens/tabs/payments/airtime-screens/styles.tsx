import { StyleSheet, StatusBar, Platform, Appearance } from "react-native";
import { hp } from "../../../../common/util/LayoutUtil";

export const AIrtimeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: "Euclid-Circular-A",
    fontWeight: "400",
    fontSize: hp(16),
    marginTop: hp(30),
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
    paddingVertical: hp(3),
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
