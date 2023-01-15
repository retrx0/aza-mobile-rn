import React from "react";
import { Image } from "react-native";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import Colors from "../../../../constants/Colors";
import { Text, View } from "../../../../theme/Themed";

const SplitDetailItem = ({
  pictureUrl,
  firstName,
  amount,
  fontSize,
}: {
  pictureUrl: string;
  firstName: string;
  amount: number;
  fontSize: number;
}) => {
  return (
    <View style={[CommonStyles.row, { alignSelf: "stretch", marginTop: 10 }]}>
      <Image
        style={{ borderRadius: 50, width: 30, height: 30 }}
        source={{
          uri: pictureUrl,
        }}
      />
      <Text
        style={{
          fontFamily: "Euclid-Circular-A",
          fontSize: hp(fontSize),
          fontWeight: "500",
          marginLeft: hp(10),
        }}
      >
        {firstName}
      </Text>
      <Text
        style={{
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          fontSize: hp(14),
          fontWeight: "500",
          marginLeft: "auto",
          color: Colors.general.red,
        }}
      >
        {NAIRA_UNICODE}
        {numberWithCommas(amount.toFixed())}
      </Text>
    </View>
  );
};

export default SplitDetailItem;
