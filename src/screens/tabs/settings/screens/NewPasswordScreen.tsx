import React, { useLayoutEffect, useState } from "react";

import { View as View, Text as Text } from "../../../../theme/Themed";
import BackButton from "../../../../components/buttons/BackButton";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import Divider from "../../../../components/divider/Divider";
import CustomSwitch from "../../../../components/switch/CustomSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { toastError } from "../../../../common/util/ToastUtil";

import { changePasswordAPI } from "../../../../api/user";

const NewPasswordScreen = ({
  navigation,
  route,
}: CommonScreenProps<"NewPassword">) => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [isTransactionPin, setTransactionPin] = useState<boolean>(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const { oldPassword } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          New Password
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const checkIfPasswordsMatch = () => {
    if (
      newPassword !== newPasswordConfirmation ||
      newPassword === "" ||
      newPasswordConfirmation === "" ||
      newPassword === oldPassword
    ) {
      return true;
    }
    return false;
  };

  const updatePassword = async () => {
    setButtonLoading(true);
    if (isTransactionPin) {
      // TODO: update pin with updatePinAPI
    }
    changePasswordAPI(oldPassword, newPassword)
      .then(() => {
        setButtonLoading(false);
        navigation.navigate("StatusScreen", {
          statusIcon: "Success",
          status: "Successful",
          statusMessage: "We have successfully updated your password",
          navigateTo: "Settings",
        });
      })
      .catch(() =>
        toastError(
          "There was a problem changing your password ⚠️, please try again!"
        )
      );
  };
  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            marginLeft: hp(20),
            fontWeight: "500",
          }}
        >
          Please enter your new password
        </Text>
        <View
          style={{
            marginTop: hp(50),
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={newPassword}
            secureInput
            headerText="Password"
            onValueChanged={(pass) => setNewPassword(pass)}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
        <View
          style={{
            marginTop: hp(70),
            marginBottom: hp(100),
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={newPasswordConfirmation}
            secureInput
            autoFocusOnLoad={false}
            headerText="Confirm password"
            onValueChanged={(pass) => setNewPasswordConfirmation(pass)}
          />
        </View>
        <View
          style={[
            CommonStyles.row,
            {
              marginBottom: hp(15),
            },
          ]}
        >
          <Text style={{ fontSize: 12, marginRight: 10 }}>
            Use as transaction pin
          </Text>
          <CustomSwitch
            isEnabled={isTransactionPin}
            onSwitchToggle={() => {
              setTransactionPin(!isTransactionPin);
            }}
          />
        </View>
        <Divider />
        <Button
          title="Continue"
          disabled={checkIfPasswordsMatch()}
          onPressButton={() => updatePassword()}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(10),
          }}
          buttonLoading={isButtonLoading}
        />
      </View>
    </SpacerWrapper>
  );
};

export default NewPasswordScreen;
