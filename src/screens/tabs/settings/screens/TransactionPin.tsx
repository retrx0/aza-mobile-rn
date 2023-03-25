import React, { useState } from "react";

import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { setUserTransactionPinAPI } from "../../../../api/user";
import { toastError, toastSuccess } from "../../../../common/util/ToastUtil";

const TransactionPin = ({
  navigation,
}: CommonScreenProps<"TransactionPin">) => {
  const [pin, setPin] = useState("");

  useNavigationHeader(navigation, "Transaction Pin");

  const handleChangePin = () => {
    setUserTransactionPinAPI(pin)
      .then((res) => {
        navigation.getParent()?.navigate("Settings");
        toastSuccess("Transaction pin set successfully");
      })
      .catch((e) => {
        console.debug(e);
        toastError("Couldn't set transaction pin!");
      });
  };

  return (
    <SpacerWrapper>
      <View style={[{ marginTop: hp(20) }]}>
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
            pinCount={4}
            withKeypad
            headerText="Set New Pin"
            autoFocusOnLoad={false}
            onValueChanged={(pass) => {
              setPin(pass);
              if (pass.length > 3 && pass.length === 4 && pass.length < 5) {
                handleChangePin();
              }
            }}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
      </View>
      {/* <Button
        title="Save Changes"
        disabled={pin.length < 4 ? true : false}
        onPressButton={handleChangePin}
        styleText={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: 14,
        }}
        style={{ bottom: 10 }}
        buttonLoading={isButtonLoading}
      /> */}
    </SpacerWrapper>
  );
};

export default TransactionPin;
