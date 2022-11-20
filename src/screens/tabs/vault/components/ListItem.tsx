import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Text, View } from "../../../../components/Themed";
import { hp, wp } from "../../../../common/util/LayoutUtil";

type Props = {
  Icon: any;
  title: string;
  route: string;
  onPress: any;
  index: number;
  IconComponent?: any;
  subtitle: string;
};

const ListItem = ({ Icon, title, onPress, subtitle }: Props) => {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <TouchableAnimated onPress={onPress}>
      <View style={styles.mainItem}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View>
          <Icon />
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#EAEAEC",
          width: wp(380),
          alignSelf: "center",
          marginTop: hp(17),
          marginBottom: hp(17),
        }}
      />
    </TouchableAnimated>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(14),
    fontWeight: "400",
    marginTop: hp(2),
  },

  mainItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: hp(10),
    alignItems: "center",
  },

  text: {
    fontWeight: "600",
    fontSize: hp(17),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
});

export default ListItem;
