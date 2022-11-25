import React from "react";
import { StyleSheet } from "react-native";
import { CountriesType } from "../../../../types";
import { PhoneInputProps } from "../../../components/Themed";
import { CountryBox } from "../signup/components/CountryInput";

type StageOneProp = {
  onCountryPress: () => void;
  country: CountriesType;
  onChangeText: (text: string) => void;
  onSendOtp: any;
  phoneNumber: string;
  onChangePhoneNumber: any;
};

const Phone = (props: StageOneProp & PhoneInputProps) => {
  const {
    onCountryPress,
    country,
    onChangeText,
    onSendOtp,
    phoneNumber,
    onChangePhoneNumber,
  } = props;
  return (
    <>
      <CountryBox
        onPress={onCountryPress}
        code={country.code}
        value={phoneNumber}
        onChangeText={onChangeText}
        onChangePhoneNumber={onChangePhoneNumber}
        onSendOtp={onSendOtp}
        short_name={""}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Phone;
