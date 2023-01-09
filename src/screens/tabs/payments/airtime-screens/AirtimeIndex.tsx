import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { AIrtimeStyles as styles } from "./styles";

import { hp } from "../../../../common/util/LayoutUtil";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { toastError } from "../../../../common/util/ToastUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

import { View } from "../../../../theme/Themed";
import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import Button from "../../../../components/buttons/Button";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { Card } from "../sub-components/Card";

import { useAppSelector } from "../../../../redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { toggleActivityModal } from "../../../../redux/slice/activityModalSlice";
import {
  setAmount as setAmountRedux,
  setDetailHeader,
  setDetailValue,
  setLogo,
  setPaymentTYpe,
  setTo,
} from "../../../../redux/slice/paymentSlice";

import {
  detectNetworkOperatorAPI,
  fetchAirtimeOperatorsAPI,
  fetchNetworkOperatorDataPlansAPI,
} from "../../../../api/airtime";

export default function AirtimeIndex({
  navigation,
}: CommonScreenProps<"AirtimeData">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<any>("");
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
    if (route.name === "data-bundle" && selectedProvider) {
      fetchNetworkOperatorDataPlansAPI(selectedProvider.toUpperCase())
        .then(({ data }) => {
          const entires = Object.entries(data.fixedAmountsDescriptions).map(
            ([value, label]) => ({ value, label: label as string })
          );
          setDataBundles(entires);
        })
        .catch((err) => console.log(err));
    }
  }, [route.name, selectedProvider]);

  const detectNetworkProvider = (number: string) => {
    dispatch(toggleActivityModal(true));
    detectNetworkOperatorAPI(number.replace("+", ""))
      .then((res) => {
        setMobileNumber(number);
        setSelectedProvider(res.data.name.split(" ")[0]);
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
    <View style={styles.container}>
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
        }}
      >
        {airtimeOperators.map(({ logoUrls, name, operatorId }, index) => {
          if (displayedOperators.has(name.split(" ")[0])) {
            return null;
          }
          displayedOperators.add(name.split(" ")[0]);

          return (
            <Card
              key={index}
              title={name.split(" ")[0]}
              icon={logoUrls[0]}
              onPress={() => {
                setSelectedProvider(name.split(" ")[0]);
                dispatch(setTo(name));
                dispatch(setLogo(logoUrls[0]));
              }}
              isActive={name.split(" ")[0] === selectedProvider}
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
          inputStyle={[styles.input]}
          labelStyle={styles.label}
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
      </View>
      {route.name == "data-bundle" && (
        <View
          style={{
            paddingHorizontal: hp(20),
            marginTop: hp(10),
            marginBottom: hp(10),
          }}
        >
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
        disabled={route.name == "data-bundle"}
        icon={null}
        inputStyle={[styles.input]}
        labelStyle={[styles.label]}
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
            dispatch(setDetailHeader("Phone number"));
            dispatch(
              setPaymentTYpe(route.name == "data-bundle" ? "Data" : "Airtime")
            );
            dispatch(setDetailValue(mobileNumber));
            dispatch(setAmountRedux(amount));
            navigation.navigate("Confirm");
          }}
          disabled={!amount || !selectedProvider || mobileNumber.length < 13}
        />
      </View>
    </View>
  );
}
