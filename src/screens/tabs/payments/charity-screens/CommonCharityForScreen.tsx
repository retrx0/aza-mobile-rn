import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View as View, Text as Text } from "../../../../theme/Themed";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import { CharityStyles as styles } from "../styles";
import { InfoIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Button from "../../../../components/buttons/Button";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import Divider from "../../../../components/divider/Divider";

const CommonCharityForScreen = ({
  navigation,
  route,
  isCharityForSomeone,
}: CommonScreenProps<"CharityDetailsScreen"> & {
  isCharityForSomeone: boolean;
}) => {
  const [amount, setAmount] = useState("");
  const [charityTransaction, setCharityTransaction] = useState({
    amount: "",
    name: "",
    email: "",
  });
  const [isRecurringEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const {
    charityName,
    description,
    pictureUrl,
    primaryAccountNo,
    primaryAccBankName,
    tabKey,
    recurringTransaction,
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <InfoIcon />
        <Text style={styles.text}>{description}</Text>
      </View>

      {isCharityForSomeone && (
        <View>
          <UnderlinedInput
            style={styles.mainInput}
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={styles.label}
            label=""
            placeholder="Name and Surname"
          />

          <UnderlinedInput
            style={styles.mainInput}
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={styles.label}
            label=""
            placeholder="Email Address"
          />
        </View>
      )}

      <UnderlinedInput
        value={amount}
        onChangeText={(amnt) => setAmount(amnt)}
        style={styles.mainInput}
        icon={null}
        inputStyle={[styles.input]}
        labelStyle={styles.label}
        label=""
        placeholder="Donation Amount"
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <View style={styles.suggestions}>
        {amountPresets.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.mainSuggestion}
              onPress={() => setAmount("" + item.amount)}
            >
              <Text style={styles.amount}>
                {NAIRA_UNICODE + " " + item.amount}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <View style={styles.check}>
          <CustomSwitch
            title="Recurring monthly donation"
            onValueChange={toggleSwitch}
            isEnabled={isRecurringEnabled || recurringTransaction}
          />
        </View>

        <Divider />
        <Button
          style={styles.btn}
          disabled={!amount}
          title="Continue"
          onPressButton={() => {
            navigation.navigate("PaymentConfirmation", {
              amount,
              paymentMethod: "Aza Account",
              purchaseName: "Charity",
              beneficiaryLogo: pictureUrl,
              beneficiaryName: charityName,
              recurringTransaction: recurringTransaction || isRecurringEnabled,
            });
          }}
        />
        <CancelButtonWithUnderline
          onPressButton={() => navigation.goBack()}
          style={{ borderBottomColor: Colors.general.red }}
          title="Cancel"
          styleText={{
            textAlign: "center",
            color: Colors.general.red,
            fontSize: hp(16),
            fontWeight: "500",
            lineHeight: hp(17),
            fontFamily: "Euclid-Circular-A",
          }}
        />
      </View>
    </View>
  );
};

const amountPresets = [
  { id: 1, amount: 100 },
  { id: 2, amount: 500 },
  { id: 3, amount: 1000 },
  { id: 4, amount: 5000 },
];

export default CommonCharityForScreen;
