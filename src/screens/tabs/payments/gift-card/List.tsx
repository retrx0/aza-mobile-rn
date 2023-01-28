import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import { View, Text } from "../../../../theme/Themed";

import { hp } from "../../../../common/util/LayoutUtil";
import Divider from "../../../../components/divider/Divider";

type Props = {
  title: string;
  amount: string;
  route: string;
  onPress: any;
  index: number;
  IconComponent?: any;
};

export default function ListItem({
  title,
  onPress,
  index,
  amount,
  IconComponent = null,
}: Props) {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <TouchableAnimated
      entering={FadeInDown.delay(200 * (index + 1))}
      onPress={onPress}
      style={styles.listContainer}>
      <View style={styles.mainItem}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.item}>
          <Text style={{ marginRight: 13 }}>{amount}</Text>
          {IconComponent == null ? <ArrowFowardIcon /> : <IconComponent />}
        </View>
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
    paddingHorizontal: 20,
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
  },
});
