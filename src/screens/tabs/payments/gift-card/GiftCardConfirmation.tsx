import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import MyButton from "../sub-components/MyButton";
import { ScrollView } from "../../../../theme/Themed";
import { View as View, Text as Text } from "../../../../theme/Themed";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import { ImageInput } from "../sub-components/ImageInput";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Button from "../../../../components/buttons/Button";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import {
  CommonScreenProps,
  CommonStackParamList,
} from "../../../../common/navigation/types";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

export default function GiftCardConfirmation({
  navigation,
  route,
}: CommonScreenProps<"GiftCardConfirmation">) {
  const [confirmed, setConfirm] = useState(false);
  const insets = useSafeAreaInsets();

  const { emailAddress } = useAppSelector(selectUser);

  const {
    giftCard: { brand, fixedSenderDenominations, productName, selectedPrice },
  } = route.params;

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.txt}>
            Your digital code purchase would be complete after your
            confirmation. The code would be sent to you via email and SMS.
          </Text>

          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
            }}
            label={"Package"}
            value={productName}
          />

          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
            }}
            label="Amount"
            value={NAIRA_UNICODE + selectedPrice}
            returnKeyType="done"
          />
          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
            }}
            label="Email Address"
            value={emailAddress}
            returnKeyType="done"
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={() => {
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "Your Transaction was successfull",
                navigateTo: "Payments",
              });
            }}
            styleText={{}}
            style={[]}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() => {
              navigation.goBack();
            }}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  txt: {
    marginBottom: hp(40),
    marginTop: hp(20),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
  },
  btn: {
    marginTop: "auto",
    marginBottom: 0,
    width: "10%",
  },
  cancelContainer: {
    marginTop: 5,
  },
});
