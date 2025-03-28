import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoIcon: {
    marginLeft: 100,
  },
  buttonText: {
    alignSelf: "center",
    margin: 5,
  },
  row: {
    marginHorizontal: 10,
    padding: 10,
  },
  col: {
    flexDirection: "column",
    alignSelf: "center",
    margin: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default styles;
