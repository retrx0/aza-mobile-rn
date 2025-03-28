import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

import {
  addUserBvnThunk,
  getUserAccountDetails,
  getUserInfo,
} from "../../redux/slice/userSlice";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector, useAppDispatch } from "../../redux";
import DatePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import apiCourier from "../../api/courier";
import { create9PSBWallet } from "../../api/account";
import { addBVNAPI } from "../../api/user";
import { Platform, TouchableOpacity } from "react-native";

const BvnVerificationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BvnVerification">) => {
  const [bvn, setBvn] = useState("");
  const [dob, setDOB] = useState<Date>(new Date());
  const [isButtonLoading, setButtonLoading] = useState(false);

  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);

  const { onVerifyNavigateBackTo } = route.params;

  useNavigationHeader(navigation, "Tier 1 Verification");

  const verifyBvn = async () => {
    setButtonLoading(true);
    console.debug(dob.toISOString().split("T")[0]);
    addBVNAPI({ bvn, dateOfBirth: dob.toISOString().split("T")[0] })
      .then((response) => {
        if (response.requestState === "Success") {
          dispatch(getUserInfo());
          create9PSBWallet({
            bvn,
            dateOfBirth: dob.toISOString().split("T")[0],
          })
            .then((r) => {
              setButtonLoading(false);
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage:
                  "You have successfully added your BVN to your Aza account",
                navigateTo: onVerifyNavigateBackTo,
              });
              dispatch(getUserAccountDetails());
              dispatch(getUserInfo());
            })
            .catch((e) => {
              console.error("Couldn't create wallet, please try again!" + e);
              // toastError("Couldn't create wallet, please try again!");
              setButtonLoading(false);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        toastError("Couldn't link your BVN, please try again!");
        setButtonLoading(false);
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
              Date of Birth
            </Text>
            {Platform.OS === "ios" && (
              <DatePicker
                value={dob}
                mode="date"
                maximumDate={new Date()}
                placeholderText="Date of Birth"
                onChange={(date) => {
                  if (date.nativeEvent.timestamp)
                    setDOB(new Date(date.nativeEvent.timestamp));
                }}
              />
            )}

            {Platform.OS === "android" && (
              <View>
                <TouchableOpacity
                  onPress={() => setDateTimePickerVisible((v) => !v)}
                  style={{ alignSelf: "flex-end", margin: 2 }}
                >
                  <Text style={{ padding: 3 }}>
                    {dob ? "" + dob.toISOString().split("T")[0] : "Select Date"}
                  </Text>
                </TouchableOpacity>
                {dateTimePickerVisible && (
                  <DatePicker
                    mode={"date"}
                    display="default" // 'default', 'spinner', 'calendar', 'clock' // Android Only
                    value={dob}
                    accentColor={Colors[appTheme].backgroundSecondary}
                    textColor={Colors[appTheme].text}
                    style={{
                      backgroundColor: Colors[appTheme].backgroundSecondary,
                    }}
                    themeVariant={appTheme}
                    onChange={(event, date) => {
                      setDateTimePickerVisible(false);
                      if (date) setDOB(date);
                    }}
                  />
                )}
              </View>
            )}
          </View>
          <View style={{ marginTop: 20 }}>
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
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
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
            title="Couldn’t verify BVN?"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            style={{ marginTop: 10 }}
            onPressButton={() => navigation.navigate("BvnVerificationFailed")}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationScreen;
