import { FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import Phone from "../../../auth/common/PhoneStage";
import Modal from "react-native-modal";

import {
  CountriesType,
  CountryDetails,
  CountryProps,
} from "../../../../../types";
import { useCountries } from "../../../../hooks/useCountries";
import { CountriesCard } from "../../../auth/signup/components/CountriesCard";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";

const ChangePhoneNumberScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumber">) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState<CountriesType>(CountryDetails[0]);
  const { loading, countries } = useCountries();
  const fetchedCountries = ({ item }: { item: CountryProps }) => {
    return <CountriesCard onPress={() => selectCountry(item)} {...item} />;
  };
  const selectCountry = (item: CountriesType) => {
    setCountry(item);
    setModalVisible(false);
  };

  const { phoneNumber } = useAppSelector(selectUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
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
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
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
            style={{
              fontSize: 16,
              fontFamily: "Euclid-Circular-A-Medium",
              marginBottom: hp(10),
              marginLeft: hp(20),
            }}
          >
            Current Phone Number
          </Text>
          <Phone
            country={country}
            phoneNumber={phoneNumber}
            onCountryPress={() => {}}
            onChangeText={() => {}}
            onChangePhoneNumber={() => {}}
            initialValue={phoneNumber}
            autoFormat
            textStyle={[CommonStyles.textStyle]}
            textProps={{
              placeholder: "Enter a phone number...",
            }}
            offset={20}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Euclid-Circular-A-Medium",
              marginBottom: hp(10),
              marginLeft: hp(20),
            }}
          >
            New Phone Number
          </Text>
          <Phone
            country={country}
            phoneNumber={newPhoneNumber}
            onCountryPress={() => setModalVisible(true)}
            onChangeText={(e) => setNewPhoneNumber(e)}
            onChangePhoneNumber={() => {}}
            initialValue={phoneNumber}
            autoFormat
            textStyle={[CommonStyles.textStyle]}
            textProps={{
              placeholder: "Enter a phone number...",
            }}
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
          disabled={newPhoneNumber.length < 10}
        />
      </View>
      <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.9}>
        <View
          style={[
            {
              borderRadius: hp(10),
              marginTop: hp(0),
              marginBottom: hp(50),
            },
          ]}
        >
          <FlatList
            style={[
              {
                borderRadius: hp(10),
                paddingTop: hp(20),
                paddingHorizontal: hp(20),
              },
            ]}
            data={countries}
            renderItem={fetchedCountries}
          />
        </View>
      </Modal>
    </SpacerWrapper>
  );
};

export default ChangePhoneNumberScreen;
