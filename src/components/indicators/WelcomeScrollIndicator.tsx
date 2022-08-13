import React from "react";
import { hp, wp } from "../../common/util/utils";
import Colors from "../../constants/Colors";
import { useThemeColor, View } from "../Themed";

const WelcomeScrollIndicator = (props: { count: number; active: boolean; activeIndex?: number }) => {
  const backgroundColor = props.active
    ? useThemeColor({ light: Colors.general.black, dark: Colors.general.white }, "background")
    : "#A6A6A6";

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          borderColor: backgroundColor,
          borderStyle: "solid",
          borderWidth: 0.8,
          width: wp(60),
          marginTop: hp(20),
          margin: hp(5),
        },
      ]}
    ></View>
  );
};

export default WelcomeScrollIndicator;
