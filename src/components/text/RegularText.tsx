import React from "react";
import { hp } from "../../common/util/LayoutUtil";
import { Text } from "../Themed";

export default function RegularText({
  text,
  style,
}: {
  text: string;
  style?: {};
}) {
  return (
    <Text
      style={[
        style,
        {
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          fontWeight: "600",
          fontSize: hp(16),
        },
      ]}>
      {text}
    </Text>
  );
}
