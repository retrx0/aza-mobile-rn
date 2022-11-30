import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { PhoneInput, Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import useColorScheme from "../../../../hooks/useColorScheme";

const ChangePhoneNumberScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumber">) => {
  const colorScheme = useColorScheme();
  const [currentPhoneNumber, _] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

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
          New Phone Number
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
          fontWeight: "500",
          // marginTop: hp(30),
          // marginBottom: hp(30),
        }}>
        Change your mobile phone number
      </Text>
      <View style={{ marginBottom: 10, marginTop: 50 }}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Medium",
            marginBottom: hp(10),
          }}>
          Current Phone Number
        </Text>
        <PhoneInput
          initialValue={currentPhoneNumber}
          disabled
          initialCountry="ng"
          autoFormat
          textStyle={{
            fontSize: 16,
            padding: 3,
          }}
          style={{
            alignSelf: "center",
            height: 50,
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
            marginBottom: hp(40),
          }}
        />

        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Medium",
            marginBottom: hp(10),
          }}>
          New Phone Number
        </Text>
        <PhoneInput
          initialValue={newPhoneNumber}
          onChangePhoneNumber={(p) => setNewPhoneNumber(p)}
          initialCountry="ng"
          autoFormat
          textStyle={{
            fontSize: 16,
            padding: 3,
          }}
          textProps={{
            placeholder: "Enter new phone number",
          }}
          style={{
            alignSelf: "center",
            height: 50,
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
            marginBottom: hp(47),
          }}
        />
      </View>
      <Button
        title="Continue"
        onPressButton={() => navigation.navigate("ChangePhoneNumberOTP")}
        styleText={{
          color: Colors[colorScheme].buttonText,
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: hp(14),
        }}
        style={{
          backgroundColor: Colors[colorScheme].button,
        }}
      />
    </View>
  );
};

export default ChangePhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
