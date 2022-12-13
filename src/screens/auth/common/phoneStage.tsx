import React from "react";
import { StyleSheet } from "react-native";
import { CountriesType } from "../../../../types";
import { PhoneInputProps } from "../../../components/Themed";
import { CountryBox } from "../signup/components/CountryInput";

type StageOneProp = {
  onCountryPress: () => void;
  country: CountriesType;
  onChangeText: (text: string) => void;
  phoneNumber: string;
  onChangePhoneNumber: any;
};

const Phone = (props: StageOneProp & PhoneInputProps) => {
  const {
    onCountryPress,
    country,
    onChangeText,
    phoneNumber,
    onChangePhoneNumber,
  } = props;
  return (
    <>
      <CountryBox
        onPress={onCountryPress}
        //temporary fix for country flag
        imageLink={
          "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg"
        }
        code={country.code}
        value={phoneNumber}
        onChangeText={onChangeText}
        onChangePhoneNumber={onChangePhoneNumber}
        short_name={country.short_name}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Phone;
