import React, { useState } from "react";
import Modal from "react-native-modal";
import { FlatList, TouchableOpacity } from "react-native";

import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { CountriesCard } from "../signup/components/CountriesCard";
import { View, Text } from "../../../theme/Themed";

import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import {
  CountriesType,
  CountryProps,
  SignUpScreenProps,
} from "../../../types/types.navigation";

import { useAppDispatch } from "../../../redux";
import { setPhone as setReduxStorePhone } from "../../../redux/slice/newUserSlice";
import { requestOtpApi } from "../../../api/auth";
import Phone from "./PhoneStage";
import { useCountries } from "../../../hooks/useCountries";
import { phone } from "phone";
import { WhatsAppLogo } from "../../../../assets/svg";
import SecondaryButton from "../../../components/buttons/SecondaryButton";

const PhoneNumberScreen = ({
  navigation,
}: SignUpScreenProps<"SignUpPhoneNumber">) => {
  // const [phone, setPhone] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { loading, countries } = useCountries();
  const [country, setCountry] = useState<CountriesType>(countries[0]);

  const [buttonLoading, setButtonLoading] = useState(false);
  const [whatsAppButtonLoading, setWhatsAppButtonLoading] = useState(false);

  const FetchedCountries = ({ item }: { item: CountryProps }) => {
    return <CountriesCard onPress={() => selectCountry(item)} {...item} />;
  };
  const selectCountry = (item: CountriesType) => {
    setCountry(item);
    setModalVisible(false);
  };

  const handlePhoneNumberSubmission = (isWhatsAppOTP: boolean) => {
    !isWhatsAppOTP ? setButtonLoading(true) : setWhatsAppButtonLoading(true);
    dispatch(
      setReduxStorePhone(country.code + phoneNumber.trim().replace(/\s/g, ""))
    );
    requestOtpApi({
      email: "",
      phoneNumber: country.code + phoneNumber.trim().replace(/\s/g, ""),
      sendToWhatsApp: isWhatsAppOTP,
    })
      .then(() => {
        console.debug("Phone otp requested");
        !isWhatsAppOTP
          ? setButtonLoading(false)
          : setWhatsAppButtonLoading(false);
        navigation.push("SignUpOTP", {
          otpScreenType: "phone",
        });
      })
      .catch((e) => {
        !isWhatsAppOTP
          ? setButtonLoading(false)
          : setWhatsAppButtonLoading(false);
      });
  };

  return (
    <>
      <SpacerWrapper>
        <View style={{ marginLeft: hp(17), marginTop: hp(20) }}>
          <BackButton
            onPress={() => {
              navigation.getParent()?.navigate("Welcome");
            }}
          />
        </View>
        <View style={CommonStyles.phoneContainer}>
          <Text style={[CommonStyles.headerText]}>Sign Up</Text>
          <Text style={[CommonStyles.bodyText]}>
            Enter your phone number to sign up
          </Text>
          <Text
            style={{
              padding: hp(5),
              margin: hp(4),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(35),
              marginLeft: hp(15),
              fontSize: hp(18),
              fontWeight: "500",
            }}
          >
            Phone Number <Text style={{ color: "red" }}>*</Text>
          </Text>
        </View>
        <Phone
          country={country}
          phoneNumber={phoneNumber}
          onCountryPress={() => setModalVisible(true)}
          onChangeText={(number) => {
            setPhoneNumber(number);
          }}
          onChangePhoneNumber={(p: React.SetStateAction<string>) =>
            setPhoneNumber(p)
          }
          initialValue={phoneNumber}
          autoFormat
          textStyle={[CommonStyles.textStyle]}
          textProps={{
            placeholder: "Enter a phone number...",
          }}
          pickerBackgroundColor={"transparent"}
          offset={20}
        />

        <View style={{ marginBottom: hp(30) }}>
          <Button
            title="SMS OTP"
            onPressButton={() => {
              handlePhoneNumberSubmission(false);
            }}
            styleText={{}}
            style={[CommonStyles.button]}
            disabled={!phone(country.code + phoneNumber).isValid}
            buttonLoading={buttonLoading}
          />
        </View>

        <SecondaryButton
          title="Whatsapp OTP"
          Icon={() => (
            <WhatsAppLogo color={Colors.general.whatsapp} size={20} />
          )}
          onPress={() => handlePhoneNumberSubmission(true)}
          disabled={!phone(country.code + phoneNumber).isValid}
          isLoading={whatsAppButtonLoading}
        />
      </SpacerWrapper>
      <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.7}>
        <View
          style={[
            { borderRadius: hp(10), marginTop: hp(50), marginBottom: hp(50) },
          ]}
        >
          <FlatList
            style={[
              {
                borderRadius: hp(10),
                paddingHorizontal: wp(20),
                paddingTop: hp(20),
              },
            ]}
            data={countries}
            renderItem={FetchedCountries}
          />
        </View>
      </Modal>
    </>
  );
};

export default PhoneNumberScreen;
