import { StyleSheet, StatusBar, Platform, Appearance } from "react-native";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";

export const VaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(16),
    fontWeight: "400",
  },
  input: {
    marginLeft: 20,
    width: "90%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
  },
  button: {
    marginTop: "auto",
    marginBottom: 50,
    opacity: 0,
  },
  select: {
    width: "90%",
  },
  header: {},
});
