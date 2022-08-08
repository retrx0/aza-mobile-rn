import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../common/Button";
import { CountryBox } from "../../components/CountryInput";
import { Header } from "../../common/header";
import { SigninStyles as styles } from "./styles";
import { SocialSignInList } from "./signInCard";
import { SocialSignInCard } from "../../components/SignInButtons";

type SignInProp = {
  onCountryPress: () => void;
  onChangeText: (text: string) => void;
  onSendOtp: () => void;
  phoneNumber: string;
  short_name: string;
};

const Signin = (props: SignInProp) => {
  const { onCountryPress, onChangeText, onSendOtp, phoneNumber } = props;
  return (
    <>
      <Header
        heading='phone number'
        headerStyle={styles.header}
        descriptionStyle={undefined}
        description={""}
      />
      <CountryBox
        onPress={onCountryPress}
        value={phoneNumber}
        onChangeText={onChangeText}
        onSubmitEditing={onSendOtp}
        code={""}
        short_name={""}
      />
      <Button
        title='Continue'
        style={styles.button}
        styleText={styles.sendOTPButton}
        onPressButton={onSendOtp}
      />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.signupOptions}>
        {SocialSignInList.map((item, index) => {
          return (
            <SocialSignInCard
              key={index}
              icon={item.icon}
              connect={item.connect}
              onPress={() => {}}
            />
          );
        })}
      </View>
    </>
  );
};

export default Signin;
