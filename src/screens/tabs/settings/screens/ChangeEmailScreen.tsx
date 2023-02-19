import React, { useState } from "react";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import BoxTextInput from "../../../../components/input/BoxTextInput";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const ChangeEmailScreen = ({
  navigation,
}: CommonScreenProps<"ChangeEmail">) => {
  const user = useAppSelector(selectUser);

  const [newEmail, setNewEmail] = useState("");

  useNavigationHeader(navigation, "New Email");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              // marginTop: hp(30),
            }}>
            Change your email
          </Text>
          <View style={{ marginBottom: 10, marginTop: 30 }}>
            <BoxTextInput
              placeHolder="Current Email"
              required={true}
              value={user.emailAddress}
              onChange={() => {}}
              labelStyle={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                marginLeft: hp(5),
                fontWeight: "500",
              }}
              inputStyle={undefined}
              containerStyle={undefined}
              inputProps={{
                keyboardType: "email-address",
                textContentType: "emailAddress",
                autoComplete: "email",
                editable: false,
              }}
            />
            <BoxTextInput
              placeHolder="New Email"
              required={true}
              value={newEmail}
              onChange={(e) => setNewEmail(e.nativeEvent.text)}
              labelStyle={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                marginLeft: hp(5),
                fontWeight: "500",
              }}
              inputStyle={{}}
              containerStyle={undefined}
              inputProps={{
                keyboardType: "email-address",
                textContentType: "emailAddress",
                autoComplete: "email",
              }}
            />
          </View>
        </View>
        <Button
          title="Continue"
          onPressButton={() => navigation.getParent()?.navigate("Settings")}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(14),
          }}
          style={{
            marginTop: hp(47),
          }}
          disabled={!newEmail}
        />
      </View>
    </SpacerWrapper>
  );
};

export default ChangeEmailScreen;
