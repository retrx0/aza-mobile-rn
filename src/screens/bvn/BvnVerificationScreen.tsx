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

import { setBvnVerified } from "../../redux/slice/userSlice";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector, useAppDispatch } from "../../redux";

import { addUserBvnAPI } from "../../api/user";

const BvnVerificationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BvnVerification">) => {
  const [bvn, setBvn] = useState("");
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
          }}
        >
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

  const verifyBvn = () => {
    setButtonLoading(true);
    addUserBvnAPI(bvn)
      .then((res) => {
        setButtonLoading(false);
        dispatch(setBvnVerified(true));
        navigation.navigate("StatusScreen", {
          statusIcon: "Success",
          status: "Successful",
          statusMessage:
            "You have successfully added your BVN to your Aza account",
          navigateTo: onVerifyNavigateBackTo,
        });
      })
      .catch((err) => {
        setButtonLoading(false);
        toastError(err.message);
      });
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
            }}
          >
            Verify your BVN
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),

                fontWeight: "400",
              }}
            >
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
          ]}
        >
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
