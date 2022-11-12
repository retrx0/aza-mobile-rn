import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import * as Contacts from "expo-contacts";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import Divider from "../../components/divider/Divider";
import ContactListItem from "../../components/ListItem/ContactListItem";
import SplitListItem from "./components/SplitListItem";
import SelectedContactsScroll from "./components/SelectedContactsScroll";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import { ArrowRightIcon, CheckIcon } from "../../../assets/svg";

const SplitSelectContactsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitSelectContacts">) => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [search, setSearch] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<Contacts.Contact[]>(
    []
  );
  const colorScheme = useColorScheme();
  const { amount, date, splitImage, name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}>
          Split
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
    if (!checkIfContactIsSelected(contact)) {
      setSelectedContacts((prevState) => [...prevState, contact]);
    } else {
      setSelectedContacts(
        selectedContacts.filter(({ id }) => id !== contact.id)
      );
    }
  };

  const deSelectContact = (id: Contacts.Contact["id"]) => {
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
      <View style={styles.container}>
        <View>
          <Divider />
          <SplitListItem
            amount={amount}
            date={date}
            name={name}
            splitImage={splitImage}
          />
          <Divider />
        </View>
        <TextInput
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          placeholderTextColor={Colors[colorScheme].secondaryText}
          style={[
            styles.input,
            {
              borderBottomColor: Colors[colorScheme].separator,
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
        {selectedContacts.length > 0 && (
          <View style={[CommonStyles.row]}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: hp(15),
              }}>
              <View style={[CommonStyles.row]}>
                <View style={[CommonStyles.col, { alignItems: "center" }]}>
                  <Image
                    style={{ borderRadius: 50, width: 45, height: 45 }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    }}
                  />
                  <Text
                    // lightColor={Colors.light.text}
                    // darkColor={Colors.dark.mainText}
                    style={{ fontSize: 10, marginTop: 5 }}>
                    Chiazo
                  </Text>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                  <ArrowRightIcon
                    size={24}
                    color={Colors[colorScheme].mainText}
                  />
                </View>
              </View>
              <SelectedContactsScroll
                deSelectContact={deSelectContact}
                selectedContacts={selectedContacts}
              />
            </ScrollView>
          </View>
        )}
        <Text
          style={{
            // color: Colors[colorScheme].secondaryText,
            marginTop: hp(40),
            fontSize: hp(14),
            marginBottom: hp(20),
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(5),
            fontWeight: "400",
          }}>
          {search.length > 0 ? "Contacts" : "Quick contacts"}
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => addContact(item)}>
                <ContactListItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                  }
                  name={item.name}
                  // phoneNumber={item.phoneNumbers[0].number}
                  phoneNumber={"08167753429"}
                  suffixIcon={
                    checkIfContactIsSelected(item) ? (
                      <CheckIcon size={25} color={Colors["general"].green} />
                    ) : undefined
                  }
                />
              </TouchableOpacity>
            );
          }}
          data={filteredContacts}
        />
        <View
          style={[
            CommonStyles.col,
            { width: "100%", marginBottom: hp(35), marginTop: 5 },
          ]}>
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
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
                width: "100%",
              },
              CommonStyles.button,
            ]}
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
