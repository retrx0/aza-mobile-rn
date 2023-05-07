import React from "react";
import { Image } from "react-native";

import { TextInput, View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import {
  CommonScreenProps,
  TransactionScreenProps,
} from "../../../common/navigation/types";
import { useAppSelector } from "../../../redux";
import { selectTransaction } from "../../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../theme";
import useNavigationHeader from "../../../hooks/useNavigationHeader";
import ActivityModal from "../../../components/modal/ActivityModal";
import useTransactionService from "../hooks/useTransactionService";
import ProfilePictureView from "../../../components/views/ProfilePictureView";

const TransactionConfirmationScreen = ({
  navigation,
  route,
  confirmationType,
}: CommonScreenProps<"SendMoneyConfirmation" | "RequestMoneyConfirmation"> &
  TransactionScreenProps) => {
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const transactionType = route.params?.transactionType;

  const { beneficiary, amount, transferType, description } =
    useAppSelector(selectTransaction);

  useNavigationHeader(navigation, "Confirmation");

  const {
    makeTransaction,
    screenLoading,
    transDescription,
    setTransDescription,
  } = useTransactionService(
    { navigation: navigation, route: route },
    {
      confirmationType,
    }
  );
  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(15),
              fontWeight: "500",
              marginBottom: hp(50),
            }}
          >
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              To
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={beneficiary.fullName}
              editable={false}
            />
            <View
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
              }}
            >
              <ProfilePictureView
                firstName={beneficiary.fullName.substring(0, 1)}
                lastName={beneficiary.fullName.substring(1, 2)}
                profilePictureUrl={beneficiary.pictureUrl}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                },
              ]}
            >
              {/* <Text
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  paddingBottom: 5,
                }}>
                {NAIRA_UNICODE}
              </Text> */}
              <TextInput
                placeholderTextColor={Colors[appTheme].secondaryText}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",

                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
                value={NAIRA_UNICODE + "" + amount}
                showSoftInputOnFocus={false}
                editable={false}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Description
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
              }}
              onChangeText={setTransDescription}
              value={transDescription}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button
          title="Continue"
          onPressButton={() => {
            if (transactionType) makeTransaction(transactionType);
          }}
        />
        <CancelButtonWithUnderline
          title="Cancel Transaction"
          color={Colors.general.red}
          styleText={CommonStyles.cancelStyle}
          onPressButton={() => navigation.goBack()}
          style={{ marginTop: 5 }}
        />
      </View>
      <ActivityModal loading={screenLoading} />
    </SpacerWrapper>
  );
};

export default TransactionConfirmationScreen;
