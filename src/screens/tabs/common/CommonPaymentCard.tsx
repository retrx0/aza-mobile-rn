import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { ArrowFowardIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import Divider from "../../../components/divider/Divider";
import { ICharity, IGiftCard } from "../../../types/types.redux";
import { Text, View } from "../../../theme/Themed";

interface ITypedProps {
  index: number;
  itemPictureUrl: string;
  itemTitle: string;
  onPress: () => void;
}

export function CommonPaymentCard<T>({
  index,
  onPress,
  itemPictureUrl,
  itemTitle,
}: ITypedProps) {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.listContainer}>
      <TouchableAnimated
        entering={FadeInDown.delay(50 * (index + 1))}
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: itemPictureUrl, cache: "default" }}
            style={styles.img}
          />
          <Text style={styles.text}>{itemTitle}</Text>
        </View>
        <View>
          <ArrowFowardIcon />
        </View>
      </TouchableAnimated>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
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
export default CommonPaymentCard;
