import { StyleSheet, StatusBar, Platform, Appearance } from "react-native";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";

export const AIrtimeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginLeft: 20,
  },
  input: {
    marginLeft: 20,
    width: "90%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
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
