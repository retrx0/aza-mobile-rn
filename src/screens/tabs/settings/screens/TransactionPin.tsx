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
  route,
}: CommonScreenProps<"TransactionPin">) => {
  const [pin, setPin] = useState("");

  const pinSceenType = route.params.type;
  const capitalizedScreenType =
    pinSceenType.charAt(0).toUpperCase() + pinSceenType.slice(1);

  useNavigationHeader(navigation, `Transaction Pin`);

  const handleChangePin = () => {
    switch (pinSceenType) {
      case "set":
        setUserTransactionPinAPI(pin)
          .then((res) => {
            navigation.getParent()?.navigate("Settings");
            toastSuccess("Transaction pin set successfully");
          })
          .catch((e) => {
            console.debug(e);
            toastError("Couldn't set transaction pin!");
          });
        break;
      case "update":
        confirmPin();
        break;
      case "reset":
        break;
      case "confirm":
        break;
      case "transaction":
        break;
      default:
        break;
    }
  };

  const confirmPin = () => {
    setPin("");
    navigation.navigate("TransactionPin", { type: "confirm" });
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
          {pinSceenType !== "transaction"
            ? `You can ${capitalizedScreenType} your transaction pin`
            : "Please type in your transaction pin"}
        </Text>
        <View
          style={{
            marginTop: hp(80),
            marginBottom: hp(10),
            paddingHorizontal: hp(35),
            paddingVertical: hp(20),
          }}
        >
          <SegmentedInput
            value={pin}
            secureInput
            pinCount={4}
            withKeypad
            headerText={`${capitalizedScreenType} Pin`}
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
