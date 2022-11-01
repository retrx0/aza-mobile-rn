import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import useColorScheme from "../../../../hooks/useColorScheme";

const ChangePhoneNumberOTPScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumberOTP">) => {
  const colorScheme = useColorScheme();
  const [otp, setOTP] = useState("");

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
          OTP
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
        Please enter the OTP sent to your phone via SMS
      </Text>
      <View style={{ marginBottom: 100, marginTop: 80, marginLeft: -20 }}>
        <SegmentedInput
          value={otp}
          secureInput={false}
          headerText="OTP"
          onValueChanged={(pass) => setOTP(pass)}
        />
      </View>
      <Button
        title="Continue"
        onPressButton={() => navigation.getParent()?.navigate("Settings")}
        styleText={{
          color: Colors[colorScheme].buttonText,
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: 14,
        }}
        style={{
          width: "100%",
          backgroundColor: Colors[colorScheme].button,
        }}
      />
    </View>
  );
};

export default ChangePhoneNumberOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
