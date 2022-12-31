import { FlatList, Modal, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { PhoneInput, Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import Phone from "../../../auth/common/phoneStage";
import {
  CountriesType,
  CountryDetails,
  CountryProps,
} from "../../../../../types";
import { useCountries } from "../../../../hooks/useCountries";
import { CountriesCard } from "../../../auth/signup/components/CountriesCard";

const ChangePhoneNumberScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumber">) => {
  const colorScheme = useColorScheme();
  const [currentPhoneNumber, _] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [phone, setPhone] = useState<string>("");
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          New Phone Number
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <>
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              // marginTop: hp(30),
              // marginBottom: hp(30),
              marginLeft: hp(20),
            }}
          >
            Change your mobile phone number
          </Text>
          <View
            style={{
              marginBottom: 10,
              marginTop: 50,
            }}
          >
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Medium",
                marginBottom: hp(10),
                marginLeft: hp(20),
              }}
            >
              Current Phone Number
            </Text>
            {/* <PhoneInput
            initialValue={currentPhoneNumber}
            disabled
            initialCountry="ng"
            autoFormat
            textStyle={{
              fontSize: 16,
              padding: 3,
            }}
            style={{
              alignSelf: "center",
              height: 50,
              width: "100%",
              padding: 10,
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              marginBottom: hp(40),
            }}
          /> */}
            <Phone
              country={country}
              phoneNumber={phoneNumber}
              onCountryPress={() => setModalVisible(true)}
              onChangeText={(ttt) => {
                setPhoneNumber(ttt);
                console.log(ttt);
              }}
              onChangePhoneNumber={(p: React.SetStateAction<string>) =>
                setPhone(p)
              }
              initialValue={phoneNumber}
              autoFormat
              textStyle={[CommonStyles.textStyle]}
              textProps={{
                placeholder: "Enter a phone number...",
              }}
              pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
              offset={20}
            />

            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Medium",
                marginBottom: hp(10),
                marginLeft: hp(20),
              }}
            >
              New Phone Number
            </Text>
            {/* <PhoneInput
              initialValue={newPhoneNumber}
              onChangePhoneNumber={(p) => setNewPhoneNumber(p)}
              initialCountry="ng"
              autoFormat
              textStyle={{
                fontSize: 16,
                padding: 3,
              }}
              textProps={{
                placeholder: "Enter new phone number",
              }}
              style={{
                alignSelf: "center",
                height: 50,
                width: "100%",
                padding: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 5,
                marginBottom: hp(47),
              }}
            /> */}
            <Phone
              country={country}
              phoneNumber={phoneNumber}
              onCountryPress={() => setModalVisible(true)}
              onChangeText={(ttt) => {
                setPhoneNumber(ttt);
                console.log(ttt);
              }}
              onChangePhoneNumber={(p: React.SetStateAction<string>) =>
                setPhone(p)
              }
              initialValue={phoneNumber}
              autoFormat
              textStyle={[CommonStyles.textStyle]}
              textProps={{
                placeholder: "Enter a phone number...",
              }}
              pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
              offset={20}
            />
          </View>
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("ChangePhoneNumberOTP")}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
            }}
          />
        </View>
      </SpacerWrapper>
      <Modal visible={modalVisible}>
        <View
          style={[
            { borderRadius: hp(10) },
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

export default ChangePhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
