import { FlatList, Modal, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { PhoneInput } from "../../../../theme/Themed";
import { View as View, Text as Text } from "../../../../theme/Themed";
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
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
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
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              // marginTop: hp(30),
              // marginBottom: hp(30),
              marginLeft: hp(20),
            }}>
            Change your mobile phone number
          </Text>
          <View
            style={{
              marginBottom: 10,
              marginTop: 50,
            }}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Medium",
                marginBottom: hp(10),
                marginLeft: hp(20),
              }}>
              Current Phone Number
            </Text>
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
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Medium",
                marginBottom: hp(10),
                marginLeft: hp(20),
              }}>
              New Phone Number
            </Text>
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
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{}}
          />
        </View>
      </SpacerWrapper>
      <Modal visible={modalVisible}>
        <View style={[{ borderRadius: hp(10) }]}>
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
