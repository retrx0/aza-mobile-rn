import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Divider from "./Divider";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Text, View } from "../../../../components/Themed";
import { hp } from "../../../../common/util/LayoutUtil";

type Props = {
  Icon: any;
  title: string;
  route: string;
  onPress: any;
  index: number;
  IconComponent?: any;
};

export default function ListItem({
  Icon,
  title,
  onPress,
  index,
  IconComponent = null,
}: Props) {
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
        {IconComponent == null ? <ArrowFowardIcon /> : <IconComponent />}
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
    fontWeight: "600",
    fontSize: hp(17),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 16.5,
  },
});
