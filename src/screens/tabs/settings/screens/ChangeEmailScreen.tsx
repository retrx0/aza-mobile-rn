import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import BoxTextInput from "../../../../components/input/BoxTextInput";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ChangeEmailScreen = ({
  navigation,
}: CommonScreenProps<"ChangeEmail">) => {
  const user = useAppSelector(selectUser);

  const [newEmail, setNewEmail] = useState("");
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}
        >
          New Email
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
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              // marginTop: hp(30),
            }}
          >
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
                fontFamily: "Euclid-Circular-A",
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
                fontFamily: "Euclid-Circular-A",
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
          disabled={!user.emailAddress && !newEmail}
        />
      </View>
    </SpacerWrapper>
  );
};

export default ChangeEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
