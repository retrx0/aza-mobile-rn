import React from "react";
import * as Images from "../../../../../assets/images";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ntel, Spectranet } from "../../../../../assets/images";
import Divider from "../../../../components/divider/Divider";
import Animated, { FadeInDown } from "react-native-reanimated";

export type InternetItem = {
  ImageSource: string;
  title: string;
  icon: any;
  onPress?: () => void;
  index: number;
};
export const InternetList: InternetItem[] = [
  {
    index: 0,
    ImageSource: Images.Spectranet,
    title: "Spectranet",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 1,
    ImageSource: Images.Ntel,
    title: "Ntel",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 2,
    ImageSource: Images.smile,
    title: "Smile Communications",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 3,
    ImageSource: Images.SWIFT,
    title: "Swift Networks",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 4,
    ImageSource: Images.legend,
    title: "Legend",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 5,
    ImageSource: Images.ipnx,
    title: "ipNX",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 6,
    ImageSource: Images.cobra,
    title: "CobraNet",
    icon: <ArrowFowardIcon />,
  },
];

export const InternetCard = ({
  title,
  ImageSource,
  icon,
  index,
  onPress,
}: InternetItem) => {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.listContainer}>
      <TouchableAnimated
        entering={FadeInDown.delay(200 * (index + 1))}
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: ImageSource,
            }}
            style={styles.img}
          />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>{icon}</View>
      </TouchableAnimated>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 45,
    height: 45,
  },
  text: {
    fontWeight: "600",
    fontSize: hp(17),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 16.5,
  },
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
});
