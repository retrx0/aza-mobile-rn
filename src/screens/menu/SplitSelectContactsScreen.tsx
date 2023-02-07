import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  LayoutAnimation,
} from "react-native";
import * as Contacts from "expo-contacts";

import { CommonScreenProps } from "../../common/navigation/types";

import { View, Text, ScrollView, TextInput } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";
import ContactListItem from "../../components/ListItem/ContactListItem";
import SplitListItem from "./components/SplitListItem";
import SelectedContactsScroll from "./components/SelectedContactsScroll";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import { ArrowRightIcon, CheckIcon } from "../../../assets/svg";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import { selectUser } from "../../redux/slice/userSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const SplitSelectContactsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitSelectContacts">) => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [search, setSearch] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<Contacts.Contact[]>(
    []
  );
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const user = useAppSelector(selectUser);
  const { amount, date, splitImage, name } = route.params;

  useNavigationHeader(navigation, "Split");

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const filteredContacts = contacts.filter(
    ({ name }) => name?.includes(search) && name
  );

  const addContact = (contact: Contacts.Contact) => {
    LayoutAnimation.easeInEaseOut();
    if (!checkIfContactIsSelected(contact)) {
      setSelectedContacts((prevState) => [...prevState, contact]);
    } else {
      setSelectedContacts(
        selectedContacts.filter(({ id }) => id !== contact.id)
      );
    }
  };

  const deSelectContact = (id: Contacts.Contact["id"]) => {
    LayoutAnimation.easeInEaseOut();
    setSelectedContacts(
      selectedContacts.filter((contact) => contact.id !== id)
    );
  };

  const checkIfContactIsSelected = (contact: Contacts.Contact) => {
    return selectedContacts.some((item) => item.id.includes(contact.id));
  };

  const disabledButton = selectedContacts.length > 0 ? false : true;

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Divider />
          <SplitListItem
            amount={amount}
            date={date}
            name={name}
            splitImage={splitImage}
            requestor={{
              azaAccountNumber: "" + user.azaAccountNumber,
              fullName: user.fullName,
            }}
            requestees={[]}
          />
          <Divider />
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={[
              styles.input,
              {
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A",
                marginLeft: hp(5),
                fontWeight: "500",
              },
            ]}
            value={search}
            onChangeText={(e) => setSearch(e)}
            placeholder="With whom (Search for contact)"
          />
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          {selectedContacts.length > 0 && (
            <View style={[CommonStyles.row]}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  marginTop: hp(15),
                }}
              >
                <View style={[CommonStyles.row]}>
                  <View style={[CommonStyles.col, { alignItems: "center" }]}>
                    <Image
                      style={{ borderRadius: 50, width: 45, height: 45 }}
                      source={{
                        uri: user.pictureUrl,
                      }}
                    />
                    <Text style={{ fontSize: 10, marginTop: 5 }}>
                      {user.firstName}
                    </Text>
                  </View>
                  <View style={{ marginHorizontal: 15 }}>
                    <ArrowRightIcon
                      size={24}
                      color={Colors[appTheme].mainText}
                    />
                  </View>
                </View>
                <SelectedContactsScroll
                  deSelectContact={deSelectContact}
                  selectedContacts={selectedContacts}
                  scheme={appTheme}
                />
              </ScrollView>
            </View>
          )}
          <Text
            style={{
              marginTop: hp(40),
              fontSize: hp(14),
              marginBottom: hp(10),
              fontFamily: "Euclid-Circular-A",
              marginLeft: hp(5),
              fontWeight: "400",
            }}
          >
            {search.length > 0 ? "Contacts" : "Quick contacts"}
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => addContact(item)}
                >
                  <ContactListItem
                    image={getDefaultPictureUrl({
                      firstName: item.firstName ? item.firstName : item.name,
                      lastName: item.lastName,
                      scheme: appTheme,
                    })}
                    name={item.name}
                    // phoneNumber={item.phoneNumbers[0].number}
                    phoneNumber={"08167753429"}
                    suffixIcon={
                      checkIfContactIsSelected(item) ? (
                        <CheckIcon size={25} color={Colors["general"].green} />
                      ) : undefined
                    }
                    isContactOnAza={false}
                  />
                </TouchableOpacity>
              );
            }}
            data={filteredContacts}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: 0, paddingBottom: 55, paddingTop: 5 },
          ]}
        >
          <Button
            title="Continue"
            disabled={disabledButton}
            onPressButton={() =>
              navigation.navigate("SplitEditContacts", {
                amount,
                date,
                splitImage,
                name,
                contacts: selectedContacts,
              })
            }
            style={[CommonStyles.button]}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SplitSelectContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 10,
    marginTop: hp(25),
    borderBottomWidth: 1,
  },
});
