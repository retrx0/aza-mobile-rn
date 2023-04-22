import React from "react";
import { CountriesType } from "../../../types/types.navigation";
import { PhoneInputProps } from "../../../theme/Themed";
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
        imageLink={country.imageLink}
        code={country.code}
        value={phoneNumber}
        onChangeText={onChangeText}
        onChangePhoneNumber={onChangePhoneNumber}
        short_name={country.short_name}
      />
    </>
  );
};

export default Phone;
