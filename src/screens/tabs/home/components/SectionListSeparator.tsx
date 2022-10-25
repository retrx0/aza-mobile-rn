import React from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";

const SectionListSeparator = ({
  title,
  listSize,
}: {
  title: string;
  listSize: number;
}) => {
  return (
    <View
      style={[
        CommonStyles.row,
        {
          alignItems: "flex-end",
          alignSelf: "flex-start",
          marginTop: hp(15),
        },
      ]}
    >
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.secondaryText}
        style={{ fontSize: 14 }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#2A9E17",
          marginLeft: 10,
          fontSize: 12,
          fontFamily: "Euclid-Circular-A-Light",
        }}
      >
        {listSize}
      </Text>
    </View>
  );
};

export default SectionListSeparator;
