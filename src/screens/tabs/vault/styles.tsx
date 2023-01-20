import { StyleSheet } from "react-native";
import { hp } from "../../../common/util/LayoutUtil";

export const VaultStyles = StyleSheet.create({
  container: {
    marginTop: hp(20),
    flex: hp(1),
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
