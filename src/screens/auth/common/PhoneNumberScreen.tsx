import React, { useState } from "react";
import { SignInScreenProps, SignUpScreenProps } from "../../../../types";
import { PhoneInput, Text, View } from "../../../components/Themed";
import useColorScheme from "../../../hooks/useColorScheme";
import { useAppDispatch } from "../../../redux";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";

const PhoneNumberScreen = ({
  navigation,
}: SignUpScreenProps<"SignUpPhoneNumber">) => {
  const [phone, setPhone] = useState<string>("");
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton
          onPress={() => {
            navigation.getParent()?.navigate("Welcome");
          }}
        />
      </View>
      <View style={CommonStyles.phoneContainer}>
        <Text style={[CommonStyles.headerText]}>Sign Up</Text>
        <Text style={[CommonStyles.bodyText]}>
          Enter your phone number to sign up
        </Text>
        <Text
          style={{
            padding: hp(5),
            margin: hp(4),
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginTop: hp(35),
            marginLeft: hp(15),
            fontSize: hp(18),
            fontWeight: "500",
          }}
        >
          Phone Number <Text style={{ color: "red" }}>*</Text>
        </Text>
      </View>
      <PhoneInput
        initialValue={phone}
        onChangePhoneNumber={(p) => setPhone(p)}
        initialCountry="ng"
        autoFormat
        textStyle={[CommonStyles.textStyle]}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
        style={[CommonStyles.phoneStyle]}
      />
      <Button
        title="Continue"
        onPressButton={() =>
          navigation.push("SignUpOTP", {
            otpScreenType: "phone",
          })
        }
        styleText={{
          color: Colors[colorScheme].buttonText,
        }}
        style={[
          {
            backgroundColor: Colors[colorScheme].button,
          },
          CommonStyles.button,
        ]}
        disabled={phone.length < 10}
      />
    </SpacerWrapper>
  );
};

export default PhoneNumberScreen;
