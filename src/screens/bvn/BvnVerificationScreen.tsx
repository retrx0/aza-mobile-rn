import React, { useLayoutEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackButton from "../../components/buttons/BackButton";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { View, Text, TextInput } from "../../theme/Themed";
import { getAppTheme } from "../../theme";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { toastError } from "../../common/util/ToastUtil";

import { addUserBvnThunk } from "../../redux/slice/userSlice";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector, useAppDispatch } from "../../redux";

const BvnVerificationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BvnVerification">) => {
  const [bvn, setBvn] = useState("");
  const [dob, setDOB] = useState("");
  const [isButtonLoading, setButtonLoading] = useState(false);

  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const { onVerifyNavigateBackTo } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}>
          Tier 1 Verification
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

  const verifyBvn = async () => {
    setButtonLoading(true);
    const bv = await dispatch(
      addUserBvnThunk({ bvn: "112123213", dateOfBirth: "1990-01-19" })
    );
    if (bv.meta.requestStatus === "fulfilled") {
      setButtonLoading(false);
      navigation.navigate("StatusScreen", {
        statusIcon: "Success",
        status: "Successful",
        statusMessage:
          "You have successfully added your BVN to your Aza account",
        navigateTo: onVerifyNavigateBackTo,
      });
    } else {
      setButtonLoading(false);
      toastError("Couldn't verify your BVN, please try again!");
    }
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              fontWeight: "500",
            }}>
            Verify your BVN
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),

                fontWeight: "400",
              }}>
              Date of Birth
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[appTheme].borderColor,
                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="YYYY-MM-DD"
              keyboardType="number-pad"
              returnKeyType="done"
              value={dob}
              onChangeText={(text) => {
                setDOB(text);
              }}
              onEndEditing={(e) => {}}
              onBlur={(text) => {
                if (text.target.toString().length === 8) {
                  setDOB(
                    dob.split(dob.charAt(4))[0] +
                      "-" +
                      dob.split(dob.charAt(6))[0] +
                      "-" +
                      dob.split(dob.charAt(6))[1]
                  );
                }
              }}
              maxLength={8}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),

                fontWeight: "400",
              }}>
              BVN
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[appTheme].borderColor,
                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="Enter your bank verification number"
              keyboardType="number-pad"
              returnKeyType="done"
              value={bvn}
              onChangeText={(text) => setBvn(text)}
              maxLength={11}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Verify"
            onPressButton={verifyBvn}
            styleText={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            disabled={bvn.length < 11}
            buttonLoading={isButtonLoading}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            onPressButton={() => navigation.goBack()}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationScreen;
