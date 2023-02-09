import React, { useState } from "react";

import { STORAGE_KEY_JWT_TOKEN } from "@env";

import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import { View as View, Text as Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { storeItemSecure } from "../../../../common/util/StorageUtil";
import { toastError } from "../../../../common/util/ToastUtil";

import { loginUserAPI } from "../../../../api/auth";

import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const ChangePasswordScreen = ({
  navigation,
}: CommonScreenProps<"ChangePassword">) => {
  const [password, setPassword] = useState("");
  const [isButtonLoading, setButtonLoading] = useState(false);

  const { phoneNumber, emailAddress } = useAppSelector(selectUser);
  useNavigationHeader(navigation, "Current Password");

  const verifyPassword = async () => {
    setButtonLoading(true);
    loginUserAPI({
      email: emailAddress,
      phoneNumber: phoneNumber,
      password,
    })
      .then((token) => {
        if (token) {
          storeItemSecure(STORAGE_KEY_JWT_TOKEN, token);
          setButtonLoading(false);
          navigation.navigate("NewPassword", {
            oldPassword: password,
          });
        }
      })
      .catch(() => {
        setButtonLoading(false);
        toastError("Invalid password");
      });
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
            fontWeight: "500",
            marginLeft: hp(20),
          }}
        >
          Please enter your current password
        </Text>
        <View
          style={{
            marginTop: hp(80),
            marginBottom: hp(100),
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={password}
            secureInput
            headerText="Password"
            autoFocusOnLoad={false}
            onValueChanged={(pass) => setPassword(pass)}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
        <Button
          title="Continue"
          disabled={password.length < 6 ? true : false}
          onPressButton={() => verifyPassword()}
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

export default ChangePasswordScreen;
