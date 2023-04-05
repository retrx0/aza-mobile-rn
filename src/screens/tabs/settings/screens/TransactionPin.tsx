import React, { useState } from "react";

import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import useSettings from "../hooks/useSettings";
import ActivityModal from "../../../../components/modal/ActivityModal";

const TransactionPin = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionPin">) => {
  const pinSceenType = route.params.type;
  const capitalizedScreenType =
    pinSceenType.charAt(0).toUpperCase() + pinSceenType.slice(1);
  const [pin, setPin] = useState("");
  const [pin2, setNewPin] = useState("");

  useNavigationHeader(navigation, `Transaction Pin`);

  const { handlePinChange, loading, screenLoading } = useSettings({
    navigation: navigation,
    route: route,
  });

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
            ? `You can ${pinSceenType} your transaction pin`
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
            isLoading={loading && screenLoading}
            withKeypad={pinSceenType === "transaction"}
            headerText={
              pinSceenType === "update"
                ? "Current Pin"
                : `${capitalizedScreenType} Pin`
            }
            autoFocusOnLoad={false}
            onCodeFilled={(code) => {
              if (pinSceenType === "transaction")
                handlePinChange(pinSceenType, pin);
            }}
            onValueChanged={(pass) => {
              setPin(pass);
              if (pinSceenType === "transaction") {
                if (pass.length > 3 && pass.length === 4 && pass.length < 5) {
                  setTimeout(() => {
                    handlePinChange(pinSceenType, pass);
                  }, 100);
                }
              }
            }}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
              paddingBottom: 20,
            }}
          />
        </View>
        {(pinSceenType === "update" || pinSceenType === "set") && (
          <View
            style={{
              marginTop: hp(10),
              marginBottom: hp(80),
              paddingHorizontal: hp(35),
              paddingVertical: hp(20),
            }}
          >
            <SegmentedInput
              value={pin2}
              secureInput
              pinCount={4}
              withKeypad={false}
              headerText={pinSceenType === "set" ? "Confirm" : `New Pin`}
              autoFocusOnLoad={false}
              onCodeFilled={() => {}}
              onValueChanged={(pass) => setNewPin(pass)}
              headerstyle={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(16),
                fontWeight: "500",
                paddingBottom: 20,
              }}
            />
          </View>
        )}
      </View>
      {(pinSceenType === "update" || pinSceenType === "set") && (
        <Button
          title="Save Changes"
          disabled={
            pinSceenType === "update"
              ? pin.length < 4 || pin === pin2 || pin2.length < 4
              : pin.length < 4 || pin !== pin2 || pin2.length < 4
          }
          onPressButton={() => handlePinChange(pinSceenType, pin, pin2)}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{ bottom: 10 }}
          buttonLoading={loading}
        />
      )}
    </SpacerWrapper>
  );
};

export default TransactionPin;
