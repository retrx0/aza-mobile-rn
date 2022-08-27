import React from "react";
import { hp, wp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import { View } from "../Themed";

const WelcomeScrollIndicator = (props: { count: number; active: boolean; activeIndex?: number }) => {
  const backgroundColor = props.active ? Colors.general.black : Colors.general.grey;

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
