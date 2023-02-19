import React, { useState } from "react";

import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import { View as View, Text as Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const TransactionPin = ({
  navigation,
}: CommonScreenProps<"TransactionPin">) => {
  const [pin, setPin] = useState("");
  const [isButtonLoading, setButtonLoading] = useState(false);

  useNavigationHeader(navigation, "Transaction Pin");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
            marginLeft: hp(20),
          }}
        >
          You can change your transaction pin
        </Text>
        <View
          style={{
            marginTop: hp(80),
            marginBottom: hp(100),
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={pin}
            secureInput
            headerText="Pin"
            autoFocusOnLoad={false}
            onValueChanged={(pass) => setPin(pass)}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
        <Button
          title="Save Changes"
          disabled={pin.length < 6 ? true : false}
          onPressButton={() => navigation.getParent()?.navigate("Settings")}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(100),
          }}
          buttonLoading={isButtonLoading}
        />
      </View>
    </SpacerWrapper>
  );
};

export default TransactionPin;
