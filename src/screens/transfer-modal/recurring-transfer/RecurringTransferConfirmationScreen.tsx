import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import { TextInput, View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../common/navigation/types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../theme";
import useNavigationHeader from "../../../hooks/useNavigationHeader";

const RecurringTransferConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransferConfirmation">) => {
  const insets = useSafeAreaInsets();
  const [isButtonLoading, setButtonLoading] = useState(false);

  const { beneficiary, day, period, amount } = route.params;
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const onConfirm = () => {
    setButtonLoading(true);
    // TODO: perform api call based on purchaseName and continue to status screen if it is a success
    if (true) {
      setButtonLoading(true);
      navigation.push("StatusScreen", {
        status: "Successful",
        statusIcon: "Success",
        statusMessage: "Your recurring transfer was setup successfully",
        navigateTo: "Home",
      });
    } else {
      setButtonLoading(false);
    }
  };

  useNavigationHeader(navigation, "Confirmation");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginVertical: hp(20),
              fontWeight: "500",
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
              value={beneficiary.beneficiaryName}
              placeholder={beneficiary.beneficiaryName}
            />
            <Image
              source={{
                uri: beneficiary.pictureUrl,
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <UnderlinedInput
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={styles.label}
              label="Amount"
              value={numberWithCommas(amount)}
              showSoftInputOnFocus={false}
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <UnderlinedInput
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                  paddingBottom: 5,
                },
              ]}
              labelStyle={styles.label}
              label="Period"
              value={period}
              showSoftInputOnFocus={false}
            />
          </View>

          <UnderlinedInput
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                paddingBottom: 5,
              },
            ]}
            labelStyle={styles.label}
            label="Day"
            value={day}
            showSoftInputOnFocus={false}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={onConfirm}
            buttonLoading={isButtonLoading}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            onPressButton={() => navigation.goBack()}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default RecurringTransferConfirmationScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: "Euclid-Circular-A",
    fontWeight: "400",
    fontSize: hp(16),
    marginTop: hp(15),
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: hp(23),
  },

  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
});
