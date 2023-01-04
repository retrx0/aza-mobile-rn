import { StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function RadioInput({ sharedValue }: { sharedValue: any }) {
  // const sharedValue=useSharedValue(0)

  const reanimatedStyle = useAnimatedStyle(() => {
    const bg = interpolateColor(
      sharedValue.value,
      [0, 1],
      ["#ffffff", "#2A9E17"]
    );
    return {
      backgroundColor: bg,
    };
  });

  const reanimatedStyle2 = useAnimatedStyle(() => {
    const border = interpolateColor(
      sharedValue.value,
      [0, 1],
      ["#A6A6A6", "#2A9E17"]
    );
    return {
      borderColor: border,
    };
  });
  return (
    <Animated.View style={[styles.radioConatiner, reanimatedStyle2]}>
      <Animated.View style={[styles.radio, reanimatedStyle]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  radio: {
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  radioConatiner: {
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
  },
});
