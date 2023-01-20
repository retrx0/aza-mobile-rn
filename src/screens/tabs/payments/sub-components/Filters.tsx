import React from "react";
import * as Images from "../../../../../assets/images";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Divider from "../../../../components/divider/Divider";
import Animated, { FadeInDown } from "react-native-reanimated";
import Colors from "../../../../constants/Colors";
import { View as View, Text as Text } from "../../../../theme/Themed";

export type FilterItem = {
  ImageSource: string;
  title: string;
  icon: any;
  onPress?: () => void;
  index: number;
};
export const InternetList: FilterItem[] = [
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
}: FilterItem) => {
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
        }}
      >
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

export const CharityList: FilterItem[] = [
  {
    index: 0,
    ImageSource: Images.ICICE,
    title: "ICICE",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 1,
    ImageSource: Images.IET,
    title: "IET",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 2,
    ImageSource: Images.FOUNTAIN,
    title: "Living Fountain Orphanage",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 3,
    ImageSource: Images.SAINTS,
    title: "Little Saints Orphanage",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 4,
    ImageSource: Images.HOPE,
    title: "Hope Motherless Babies Home",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 5,
    ImageSource: Images.Chess,
    title: "Chess in Slums",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 6,
    ImageSource: Images.DORCAS,
    title: "Aunty Dorcas Orphanage",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 7,
    ImageSource: Images.TIMEOUT,
    title: "Timeout 4 Africa",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 8,
    ImageSource: Images.SAVE,
    title: "Save the Children",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 9,
    ImageSource: Images.IREDE,
    title: "The Irede Foundation",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 10,
    ImageSource: Images.YARA,
    title: "The CeCe Yara Foundation",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 11,
    ImageSource: Images.REAL,
    title: "Keeping it real Foundation",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 12,
    ImageSource: Images.OVIE,
    title: "Ovie  Brume Foundation",
    icon: <ArrowFowardIcon />,
  },
];

export const CharityCard = ({
  title,
  ImageSource,
  icon,
  index,
  onPress,
}: FilterItem) => {
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
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: ImageSource }} style={styles.img} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>{icon}</View>
      </TouchableAnimated>
      <Divider />
    </View>
  );
};

export const GiftCardList: FilterItem[] = [
  {
    index: 0,
    ImageSource: Images.ITUNES,
    title: "ITUNES",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 1,
    ImageSource: Images.GOOGLEPLAY,
    title: "Google Play",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 2,
    ImageSource: Images.AMAZON,
    title: "Amazon",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 3,
    ImageSource: Images.PSN,
    title: "PSN",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 4,
    ImageSource: Images.XBOX,
    title: "Xbox",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 5,
    ImageSource: Images.RAZER,
    title: "Razer",
    icon: <ArrowFowardIcon />,
  },

  {
    index: 6,
    ImageSource: Images.NETFLIX,
    title: "Netflix",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 7,
    ImageSource: Images.STEAM,
    title: "Steam",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 8,
    ImageSource: Images.SEPHORA,
    title: "Sephora",
    icon: <ArrowFowardIcon />,
  },
  {
    index: 9,
    ImageSource: Images.Nintendo,
    title: "Nintendo",
    icon: <ArrowFowardIcon />,
  },
];

export const GiftCardCard = ({
  title,
  ImageSource,
  icon,
  index,
  onPress,
}: FilterItem) => {
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
          <Image source={ImageSource} style={styles.img} />
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
