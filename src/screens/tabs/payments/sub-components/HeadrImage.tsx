import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { TickIcon } from "../../../../../assets/svg";
import Animated, { ZoomIn, ZoomInDown } from "react-native-reanimated";
import { View as View, Text as Text } from "../../../../theme/Themed";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

type HeaderImageProps = {
  image: ImageSourcePropType;
  header?: string;
  title: string;
  amount?: string;
  index: number;
  selected: boolean;
  onSelect?: () => void;
};
export default function HeadrImage({
  image,
  header,
  title,
  amount,
  index,
  selected = false,
  onSelect,
}: HeaderImageProps) {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);
  return (
    <TouchableAnimated
      onPress={onSelect}
      entering={ZoomIn.delay(50 * (index + 1))}
      style={[
        styles.mainConatiner,
        {
          height: amount ? 120 : 70,
        },
      ]}>
      <View
        style={[
          styles.imageContainer,
          {
            borderWidth: amount ? 1 : 0,
            borderColor: amount ? "#A6A6A6" : "",
          },
        ]}>
        <Image
          style={[
            styles.image,
            {
              width: amount ? 40 : 45,
              height: amount ? 40 : 45,
            },
          ]}
          source={image}
        />
        {selected ? (
          <View style={styles.icon}>
            <TickIcon />
          </View>
        ) : null}
      </View>
      {header && <Text style={styles.text}>{header}</Text>}
      <Text style={styles.text2}>{title}</Text>
      {amount && (
        <Text style={styles.text3}>
          {NAIRA_UNICODE}
          {amount}
        </Text>
      )}
    </TouchableAnimated>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    alignItems: "center",
    marginRight: 33.5,
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    borderRadius: 25,
  },
  icon: {
    width: 13.3,
    height: 13.3,
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ translateY: 2 }],
    borderRadius: 20,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: "#2A9E17",
    fontFamily: "Euclid-Circular-A-Medium",
  },
  text2: {
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "Euclid-Circular-A-Medium",
  },
  text3: {
    fontWeight: "400",
    fontSize: 16,
    color: "#A6A6A6",
    fontFamily: "Euclid-Circular-A-Medium",
  },
});
