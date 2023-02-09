import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { hp } from "../../../../../common/util/LayoutUtil";
import { CommonScreenProps } from "../../../../../common/navigation/types";
import { toastError } from "../../../../../common/util/ToastUtil";
import { numberWithCommas } from "../../../../../common/util/NumberUtils";
import { NAIRA_UNICODE } from "../../../../../constants/AppConstants";

import { View } from "../../../../../theme/Themed";
import { Header } from "../../../../../components/text/header";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import CustomSwitch from "../../../../../components/input/CustomSwitch";
import Button from "../../../../../components/buttons/Button";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
import { Card } from "../../sub-components/Card";

import { useDispatch } from "react-redux";
import { selectUser } from "../../../../../redux/slice/userSlice";
import { toggleActivityModal } from "../../../../../redux/slice/activityModalSlice";
import { useAppSelector } from "../../../../../redux";
import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../../theme";

import {
  detectNetworkOperatorAPI,
  fetchAirtimeOperatorsAPI,
  fetchNetworkOperatorDataPlansAPI,
} from "../../../../../api/airtime";
import { AIrtimeStyles } from "../../airtime-screens/styles";

export default function AirtimeRecurring({
  navigation,
}: CommonScreenProps<"AirtimeData">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const period = [
    { label: "Monthly", value: "monthly" },
    { label: "Weekly", value: "weekly" },
    { label: "Daily", value: "daily" },
  ];

  const dayMonthly = [
    { label: "First Day of the Month", value: "1" },
    { label: "2nd", value: "2" },
    { label: "3rd", value: "3" },
  ];

  const [selectedProvider, setSelectedProvider] = useState<{
    name: any;
    logoUrls: string[];
    operatorId: number;
  }>({
    name: "",
    logoUrls: [],
    operatorId: 0,
  });
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [airtimeOperators, setAirtimeOperators] = useState<
    {
      name: string;
      logoUrls: string[];
      operatorId: number;
    }[]
  >([]);

  const [dataBundles, setDataBundles] = useState<
    { label: string; value: string }[]
  >([]);

  const route = useRoute();
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    fetchAirtimeOperatorsAPI().then((r) => setAirtimeOperators(r.data.data));
  }, []);

  useEffect(() => {
    if (isEnabled) {
      detectNetworkProvider(user.phoneNumber);
    }
  }, [isEnabled]);

  useEffect(() => {
    if (route.name === "data-bundle" && selectedProvider.name) {
      fetchNetworkOperatorDataPlansAPI(
        selectedProvider.name.split(" ")[0].toUpperCase()
      )
        .then(({ data }) => {
          const entires = Object.entries(data.fixedAmountsDescriptions).map(
            ([value, label]) => ({ value, label: label as string })
          );
          setDataBundles(entires);
        })
        .catch((err) => console.log(err));
    }
  }, [route.name, selectedProvider.name]);

  const detectNetworkProvider = (number: string) => {
    dispatch(toggleActivityModal(true));
    detectNetworkOperatorAPI(number.replace("+", ""))
      .then((res) => {
        setMobileNumber(number);
        setSelectedProvider(res.data);
        dispatch(toggleActivityModal(false));
      })
      .catch(() => {
        dispatch(toggleActivityModal(false));
        toastError("Error detecting provider. Please select manually");
      });
  };

  const handleChange = (text: string) => {
    let updatedText = text;
    if (text.charAt(0) === "0") {
      updatedText = text.substring(1);
    }
    if (updatedText.length === 13) {
      detectNetworkProvider(updatedText);
    }
    setMobileNumber(
      mobileNumber.startsWith("234") ? updatedText : `234${updatedText}`
    );
  };

  // removes duplicated operators
  const displayedOperators = new Set();

  return (
    <View style={AIrtimeStyles.container}>
      <Header
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontWeight: "600",
          fontSize: hp(16),
          marginTop: hp(30),
        }}
        heading="Select Network Provider"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: hp(15), maxHeight: 80 }}
        contentContainerStyle={{
          justifyContent: "space-between",
          width: "100%",
        }}>
        {airtimeOperators.map((operator, index) => {
          if (displayedOperators.has(operator.name.split(" ")[0])) {
            return null;
          }
          displayedOperators.add(operator.name.split(" ")[0]);

          return (
            <Card
              key={index}
              title={operator.name.split(" ")[0]}
              icon={operator.logoUrls[0]}
              onPress={() => {
                setSelectedProvider(operator);
              }}
              isActive={
                operator.name.split(" ")[0] ===
                selectedProvider.name.split(" ")[0]
              }
            />
          );
        })}
      </ScrollView>

      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          icon={null}
          maxLength={13}
          keyboardType="phone-pad"
          value={isEnabled ? user.phoneNumber : mobileNumber}
          inputStyle={[
            AIrtimeStyles.input,
            { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
          ]}
          labelStyle={AIrtimeStyles.label}
          style={{ marginTop: hp(10) }}
          label="Phone Number"
          placeholder="Enter a phone number"
          returnKeyType="done"
          onChangeText={handleChange}
        />
        <CustomSwitch
          title="My number"
          onValueChange={() => setIsEnabled((previousState) => !previousState)}
          isEnabled={isEnabled}
        />

        <View style={{ marginBottom: hp(20), marginTop: hp(20) }}>
          <CustomDropdown
            data={period}
            placeholder="Choose a period"
            setValue={setPeriodValue}
            value={periodValue}
            label={"Period"}
          />
        </View>
        {periodValue !== "daily" && (
          <View style={{ marginBottom: hp(20), marginTop: hp(20) }}>
            <CustomDropdown
              data={dayMonthly}
              placeholder="Choose a day"
              setValue={setDayValue}
              value={dayValue}
              label={"Day"}
            />
          </View>
        )}
      </View>
      {route.name === "data-bundle" && (
        <View
          style={{
            paddingHorizontal: hp(20),
            marginTop: hp(10),
            marginBottom: hp(10),
          }}>
          <CustomDropdown
            data={dataBundles}
            placeholder="Choose a bundle"
            setValue={setAmount}
            value={amount}
            style={[
              { fontFamily: "Euclid-Circular-A" },
              { fontWeight: "400" },
              { fontSize: hp(16) },
            ]}
            label={"Bundle"}
          />
        </View>
      )}

      <UnderlinedInput
        value={
          route.name == "data-bundle"
            ? NAIRA_UNICODE + numberWithCommas(amount)
            : amount
        }
        style={{ paddingHorizontal: hp(20) }}
        disabled={route.name === "data-bundle"}
        icon={null}
        inputStyle={[
          AIrtimeStyles.input,
          { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
        ]}
        labelStyle={[AIrtimeStyles.label]}
        label="Amount"
        placeholder="Enter an amount"
        keyboardType="number-pad"
        returnKeyType={route.name !== "data-bundle" ? "done" : "none"}
        showSoftInputOnFocus={route.name !== "data-bundle"}
        onChangeText={(text) => {
          setAmount(text);
        }}
      />

      <View style={{ marginTop: "auto", marginBottom: hp(45) }}>
        <Button
          title="Continue"
          onPressButton={() => {
            navigation.navigate("PaymentConfirmation", {
              amount,
              beneficiaryLogo: selectedProvider.logoUrls[0],
              beneficiaryName: selectedProvider.name,
              purchaseName: route.name == "data-bundle" ? "Data" : "Airtime",
              paymentMethod: "Aza Account",
              phoneNumber: mobileNumber,
            });
          }}
          disabled={!amount || !selectedProvider || mobileNumber.length < 13}
        />
      </View>
    </View>
  );
}
