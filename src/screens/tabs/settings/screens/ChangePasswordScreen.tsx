import { StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { loginThunk } from "../../../../redux/slice/authSlice";
import Toast from "react-native-toast-message";
import { toggleActivityModal } from "../../../../redux/slice/activityModalSlice";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

const ChangePasswordScreen = ({
  navigation,
}: CommonScreenProps<"ChangePassword">) => {
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const { phoneNumber, emailAddress } = useAppSelector(selectUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}
        >
          Current Password
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

  const verifyPassword = async () => {
    dispatch(toggleActivityModal(true));
    const payloadItem = await dispatch(
      loginThunk({
        email: emailAddress,
        phoneNumber,
        password: password,
      })
    );
    if (payloadItem.payload === "Invalid crendential") {
      dispatch(toggleActivityModal(false));
      Toast.show({
        type: "error",
        text1: payloadItem.payload,
      });
    } else {
      dispatch(toggleActivityModal(false));
      navigation.navigate("NewPassword", {
        oldPassword: password,
      });
    }
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
        />
      </View>
    </SpacerWrapper>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
