import { StyleSheet } from "react-native";

import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../components/input/UnderlinedInput";
import { Text, View } from "../../theme/Themed";

import { AZALightningLogo } from "../../../assets/svg";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import Colors from "../../constants/Colors";
import { CommonScreenProps } from "../../common/navigation/types";
import { hp } from "../../common/util/LayoutUtil";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { getAppTheme } from "../../theme";

import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { selectUser } from "../../redux/slice/userSlice";
import { selectTransaction } from "../../redux/slice/transactionSlice";

const ReceiptScreen = ({ navigation, route }: CommonScreenProps<"Receipt">) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const user = useAppSelector(selectUser);
  const transaction = useAppSelector(selectTransaction);
  const { amount, beneficiaryName } = route.params;

  const appTheme = getAppTheme(selectedTheme);

  return (
    <View style={styles.container}>
      <AZALightningLogo
        size={25}
        color={appTheme === "dark" ? Colors.dark.mainText : Colors.light.text}
      />
      <Text
        style={{
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          marginTop: 15,
        }}
      >
        Transaction Receipt
      </Text>
      <Text
        lightColor={Colors.light.error}
        darkColor={Colors.dark.error}
        style={{
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          fontSize: 24,
          marginVertical: hp(10),
        }}
      >
        {NAIRA_UNICODE + "" + numberWithCommas(amount)}
      </Text>
      <Text
        lightColor={Colors.light.secondaryText}
        darkColor={Colors.dark.secondaryText}
        style={{
          fontSize: 14,
          fontFamily: "Euclid-Circular-A-Medium",
          marginBottom: 5,
        }}
      >
        To
      </Text>
      <Text
        style={{
          fontFamily: "Euclid-Circular-A-Semi-Bold",
        }}
      >
        {beneficiaryName}
      </Text>
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Paid On"}
        value={"05 Jan 2023 at 19:08"}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Sender"}
        value={user.fullName}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Transaction Type"}
        value={"Aza to Bank"}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Receiving Bank"}
        value={"Access Bank"}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Transaction Fee"}
        value={"0.00 NGN"}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Reference ID"}
        value={"Ng627jdjskknsGHYt293j3"}
      />
      <UnderlinedInput
        icon={null}
        showSoftInputOnFocus={false}
        inputStyle={styles.input}
        labelStyle={[
          styles.label,
          {
            color: Colors[appTheme].secondaryText,
          },
        ]}
        label={"Description"}
        value={transaction.description}
      />
      <Button
        title="Close Receipt"
        onPressButton={() => navigation.getParent()?.navigate("Home")}
        style={{
          marginTop: 25,
          marginBottom: 15,
        }}
      />
      <ButtonWithUnderline
        title="Download Receipt"
        color={Colors[appTheme].text}
      />
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 0.3,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  label: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(14),
  },
});
