import React, { useState } from "react";
import {
  CountriesType,
  CountryDetails,
  CountryProps,
  SignUpScreenProps,
} from "../../../../types";
import { PhoneInput, Text, View } from "../../../components/Themed";
import useColorScheme from "../../../hooks/useColorScheme";
import { useAppDispatch } from "../../../redux";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { setPhone as setReduxStorePhone } from "../../../redux/slice/newUserSlice";
import { requestOtpApi } from "../../../api/auth";
import { useCountries } from "../signup/components/UseCountries";
import { CountriesCard } from "../signup/components/CountriesCard";
import Modal from "react-native-modal";
import { FlatList } from "react-native";
// import { SelectIcon } from "../../../../assets/svg";
import Phone from "./PhoneStage";

const PhoneNumberScreen = ({
  navigation,
}: SignUpScreenProps<"SignUpPhoneNumber">) => {
  const [phone, setPhone] = useState<string>("");
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState<CountriesType>(CountryDetails[0]);
  const { loading, countries } = useCountries();

  const FetchedCountries = ({ item }: { item: CountryProps }) => {
    return <CountriesCard onPress={() => selectCountry(item)} {...item} />;
  };
  const selectCountry = (item: CountriesType) => {
    setCountry(item);
    setModalVisible(false);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

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

        {/* <View
          style={[
            CommonStyles.phoneStyle,
            { flexDirection: "row", alignItems: "center" },
          ]}>
          <PhoneInput
            initialValue={phone}
            onChangePhoneNumber={(p) => setPhone(p)}
            initialCountry="ng"
            autoFormat
            textStyle={[CommonStyles.textStyle]}
            textProps={{
              placeholder: "Enter a phone number...",
            }}
            pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
            offset={20}
          />
          <SelectIcon />
        </View> */}
        <Phone
          country={country}
          phoneNumber={phoneNumber}
          onCountryPress={() => setModalVisible(true)}
          onChangeText={(ttt) => {
            setPhoneNumber(ttt);
            console.log(ttt);
          }}
          onChangePhoneNumber={(p: React.SetStateAction<string>) => setPhone(p)}
          initialValue={phoneNumber}
          autoFormat
          textStyle={[CommonStyles.textStyle]}
          textProps={{
            placeholder: "Enter a phone number...",
          }}
          pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
          offset={20}
        />

        <Button
          title="Continue"
          onPressButton={() => {
            dispatch(
              setReduxStorePhone(phoneNumber.trim().replaceAll(/\s/g, ""))
            );
            requestOtpApi({
              email: "",
              phoneNumber: phoneNumber.trim().replaceAll(/\s/g, ""),
            }).then((code) => {
              if (code) console.debug("Phone otp requested");
            });
            navigation.push("SignUpOTP", {
              otpScreenType: "phone",
            });
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
          }}
          style={[
            {
              backgroundColor: Colors[colorScheme].button,
            },
            CommonStyles.button,
          ]}
          disabled={phoneNumber.length < 7}
        />
      </SpacerWrapper>
      <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.7}>
        <View
          style={[
            { borderRadius: hp(10), marginTop: hp(50), marginBottom: hp(50) },
            // {
            //   backgroundColor: colorScheme === "dark" ? "white" : "#dark",
            // },
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
