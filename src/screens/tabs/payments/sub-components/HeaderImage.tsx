import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { ZoomIn, ZoomInDown } from "react-native-reanimated";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import { TickIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";

type HeaderImageProps = {
  image: any;
  header?: string;
  title: string;
  amount?: string;
  index: number;
  selected: boolean;
  onSelect?: () => void;
};
export default function HeaderImage({
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
      entering={ZoomIn.delay(200 * (index + 1))}
      style={[
        styles.mainConatiner,
        {
          height: amount ? 120 : 70,
        },
      ]}
    >
      <View
        style={[
          styles.imageContainer,
          {
            borderWidth: amount ? 1 : 0,
            borderColor: amount ? "#A6A6A6" : "",
          },
        ]}
      >
        <Image
          style={[
            styles.image,
            {
              width: amount ? 36 : 44,
              height: amount ? 36 : 44,
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
      {amount && <Text style={styles.text3}>₦{amount}</Text>}
    </TouchableAnimated>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    width: 44,
    backgroundColor: "transparent",
    alignItems: "center",
    marginRight: 33.5,
  },
  imageContainer: {
    width: 44,
    height: 44,
    backgroundColor: "transparent",
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
    fontSize: 12,
    color: "#2A9E17",
  },
  text2: {
    fontWeight: "400",
    fontSize: hp(14),
    marginTop: hp(5),
  },
  text3: {
    fontWeight: "400",
    fontSize: 12,
    color: "#A6A6A6",
  },
});
