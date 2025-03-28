import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import { View as View, Text as Text } from "../../../../theme/Themed";
import { hp } from "../../../../common/util/LayoutUtil";
import Divider from "../../../../components/divider/Divider";

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
    <View style={styles.listContainer}>
      <TouchableAnimated
        entering={FadeInDown.delay(50 * (index + 1))}
        onPress={onPress}>
        <View style={styles.mainItem}>
          <View style={styles.item}>
            <Icon />
            <Text style={styles.text}>{title}</Text>
          </View>
          {IconComponent == null ? <ArrowFowardIcon /> : <IconComponent />}
        </View>

        <Divider />
      </TouchableAnimated>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    minHeight: 20,
    marginTop: 20,
    backgroundColor: "transparent",
  },
  mainItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: hp(20),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 16.5,
  },
});
