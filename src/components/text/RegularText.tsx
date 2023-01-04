import React from "react";
import { hp } from "../../common/util/LayoutUtil";

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
          fontWeight: "500",
          fontSize: hp(16),
        },
      ]}
    >
      {text}
    </Text>
  );
}
