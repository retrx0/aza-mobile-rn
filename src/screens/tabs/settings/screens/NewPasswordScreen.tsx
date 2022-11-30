import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../../../components/Themed";
import BackButton from "../../../../components/buttons/BackButton";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import CustomSwitch from "../../../../components/switch/CustomSwitch";

import { changePassword } from "../../../../api/user";

const NewPasswordScreen = ({
  navigation,
  route,
}: CommonScreenProps<"NewPassword">) => {
  const colorScheme = useColorScheme();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [isTransactionPin, setTransactionPin] = useState<boolean>(false);

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
          }}>
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
      newPasswordConfirmation === ""
    ) {
      return true;
    }
    return false;
  };

  const updatePassword = async () => {
    const result = await changePassword(oldPassword, newPassword);
    if (result?.status === 204) {
      navigation.navigate("StatusScreen", {
        statusIcon: "Success",
        status: "Successful",
        statusMessage: "We have successfully updated your password",
        navigateTo: "Settings",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{
          fontSize: hp(16),
          fontFamily: "Euclid-Circular-A-Medium",
          marginLeft: hp(5),
          fontWeight: "500",
        }}>
        Please enter your new password
      </Text>
      <View
        style={{
          marginTop: hp(50),
        }}>
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
        }}>
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
        ]}>
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
          color: Colors[colorScheme].buttonText,
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: 14,
        }}
        style={{
          marginTop: hp(10),
          backgroundColor: Colors[colorScheme].button,
        }}
      />
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
