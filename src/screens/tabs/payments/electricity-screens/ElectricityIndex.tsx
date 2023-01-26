import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SafeAreaView, View as View } from "../../../../theme/Themed";
import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { Card } from "../sub-components/Card";
import Button from "../../../../components/buttons/Button";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";

import * as Images from "../../../../../assets/images/index";

import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { toastError } from "../../../../common/util/ToastUtil";

import { fetchElectricityBillersAPI } from "../../../../api/utility-bill";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  getElectricityBillers,
  selectPayment,
} from "../../../../redux/slice/paymentSlice";
import { PaymentRoundSkeleton } from "../../../skeletons";
import { IElectricityBiller } from "../../../../redux/types";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

export default function ElectricityIndex({
  navigation,
}: CommonScreenProps<"Electricity">) {
  const [providers, setProviders] = useState([]);
  const [meterNumber, setMeterNumber] = useState("");
  const [selectedMeterType, setSelectedMeterType] = useState("");
  const [amount, setAmount] = useState("");

  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { electricityBillers } = useAppSelector(selectPayment);
  const [selectedProvider, setSelectedProvider] = useState<IElectricityBiller>(
    electricityBillers.data[0]
  );

  const meterType = [
    { label: "Prepaid", value: "PREPAID" },
    { label: "Postpaid", value: "POSTPAID" },
  ];

  useEffect(() => {
    if (!electricityBillers.loaded) dispatch(getElectricityBillers());

    fetchElectricityBillersAPI()
      .then(({ data }) => {
        const billers = data;
        for (const element of billers) {
          switch (element.name) {
            case "Ikeja Electricity Postpaid":
            case "Ikeja Electricity Prepaid":
              element.icon = Images.Ie;
              element.title = "IE";
              break;
            case "Abuja Electricity Postpaid":
            case "Abuja Electricity Prepaid":
              element.icon = Images.AEDC;
              element.title = "AEDC";
              break;
            case "Eko Electricity Postpaid":
            case "Eko Electricity Prepaid":
              element.icon = Images.EKEDC;
              element.title = "EKEDC";
              break;
            case "Ibadan Electricity Postpaid":
            case "Ibadan Electricity Prepaid":
              element.icon = Images.IBEDC;
              element.title = "IBEDC";
              break;
            case "Enugu Electricity Postpaid":
            case "Enugu Electricity Prepaid":
              element.icon = Images.EEDC;
              element.title = "EEDC";
              break;
            case "Port Harcourt Electricity Postpaid":
            case "Port Harcourt Electricity Prepaid":
              element.icon = Images.PH;
              element.title = "PH";
              break;
            case "Kano Electricity Postpaid":
            case "Kano Electricity Prepaid":
              element.icon = Images.KEDCO;
              element.title = "KEDCO";
              break;
            case "Kaduna Electricity Postpaid":
            case "Kaduna Electricity Prepaid":
              element.icon = Images.KE;
              element.title = "KE";
              break;
            case "Jos Electricity Postpaid":
            case "Jos Electricity Prepaid":
              element.icon = Images.JEDP;
              element.title = "JEDP";
              break;
            default:
              break;
          }
        }
        setProviders(billers);
      })
      .catch(() => toastError("Error while retrieving electricity providers"));
  }, []);

  // removes duplicated providers
  const displayedProviders = new Set();

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginTop: hp(30),
        }}
        heading="Select electricity provider"
      />

      {!electricityBillers.loaded ? (
        <PaymentRoundSkeleton />
      ) : (
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={CommonStyles.imageHeaderContainer}
          >
            {electricityBillers.data.map((item: IElectricityBiller, index) => {
              if (displayedProviders.has(item.name)) {
                return null;
              }
              displayedProviders.add(item.name);
              return (
                <Card
                  key={index}
                  title={item.name.split(" ")[0]}
                  icon={Images.KE}
                  onPress={() => {
                    setSelectedProvider(item);
                  }}
                  isActive={item.id === selectedProvider.id}
                />
              );
            })}
          </ScrollView>
          <View
            style={{
              paddingHorizontal: hp(20),
              marginBottom: hp(10),
            }}
          >
            {!electricityBillers.loaded ? (
              <PaymentRoundSkeleton />
            ) : (
              <CustomDropdown
                label="Meter Type"
                data={meterType}
                placeholder="Choose your meter type"
                setValue={setSelectedMeterType}
                value={selectedProvider.serviceType}
                placeholderstyle={[
                  { fontFamily: "Euclid-Circular-A" },
                  { fontWeight: "400" },
                  { fontSize: hp(16) },
                ]}
              />
            )}
          </View>
          <View style={{ paddingHorizontal: hp(20) }}>
            <UnderlinedInput
              icon={null}
              inputStyle={[styles.input]}
              labelStyle={styles.label}
              label="Meter Number"
              placeholder="Enter your meter number"
              keyboardType="number-pad"
              returnKeyType="done"
              onChangeText={(text) => {
                setMeterNumber(text);
              }}
            />

            <UnderlinedInput
              icon={null}
              inputStyle={[styles.input]}
              labelStyle={styles.label}
              label={`Amount (${NAIRA_UNICODE})`}
              placeholder="Enter an amount to be paid"
              keyboardType="number-pad"
              returnKeyType="done"
              onChangeText={(text) => {
                setAmount(text);
              }}
              value={amount}
            />
          </View>
        </View>
      )}

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button
          title="Continue"
          onPressButton={() => {
            navigation.navigate("PaymentConfirmation", {
              amount,
              beneficiaryLogo: selectedProvider.logoUrl,
              beneficiaryName: selectedProvider.name,
              purchaseName: "Electricity",
              paymentMethod: "Aza Account",
              meterNumber,
            });
          }}
          disabled={
            !amount || !meterNumber || !meterType || !selectedProvider.name
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});
