import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Divider from "./Divider";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Text, View } from "../../../../components/Themed";

type Props = {
  Icon: any;
  title: string;
  route: string;
  onPress: any;
  index: number;
};

export default function ListItem({ Icon, title, onPress, index }: Props) {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <TouchableAnimated
      entering={FadeInDown.delay(200 * (index + 1))}
      onPress={onPress}
      style={styles.listContainer}>
      <View style={styles.mainItem}>
        <View style={styles.item}>
          <Icon />
          <Text style={styles.text}>{title}</Text>
        </View>
        <TouchableOpacity>
          <ArrowFowardIcon />
        </TouchableOpacity>
      </View>
      <Divider />
    </TouchableAnimated>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    minHeight: 20,
    marginTop: 20,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  mainItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 16.5,
  },
});
