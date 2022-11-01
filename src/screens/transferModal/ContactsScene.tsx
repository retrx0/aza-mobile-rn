import { Contact } from "expo-contacts";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { verifyAzaNumber } from "../../api/aza";
import { Beneficiary, CommonScreenProps } from "../../common/navigation/types";
import CommonStyles from "../../common/styles/CommonStyles";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import { hp } from "../../common/util/LayoutUtil";
import Button from "../../components/buttons/Button";
import ButtonLg from "../../components/buttons/ButtonLg";
import ContactListItem from "../../components/ListItem/ContactListItem";
import { Text, TextInput, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import useColorScheme from "../../hooks/useColorScheme";
import { getUserContacts } from "../../hooks/useContacts";
import { selectUser } from "../../redux/slice/userSlice";
import SectionListSeparator from "../tabs/home/components/SectionListSeparator";

const ContactsScene = ({
  route,
  azaContactOnPress,
  nonAzaContactOnPress,
}: {
  route: any;
  azaContactOnPress: (beneficiary: Beneficiary) => void;
  nonAzaContactOnPress: (beneficiary: Beneficiary) => void;
}) => {
  const colorScheme = useColorScheme();
  const [contacts, setContacts] = useState<any[]>([]);
  const [userQuickContacts, setUserQuickContacts] = useState<Beneficiary[]>([]);
  const [userAzaContacts, setUserAzaContacts] = useState<Beneficiary[]>([]);
  const [searchContact, setSearchContact] = useState("");
  const [receipientAzaNumber, setReceipientAzaNumber] = useState("");

  const user = useAppSelector(selectUser);

  useEffect(() => {
    getUserContacts().then((_contacts) => {
      if (_contacts) {
        setContacts(_contacts.filter((_c) => _c.contactType === "person"));
        setUserQuickContacts(user.azaContacts);
        setUserAzaContacts(user.azaContacts);
      }
    });
  }, []);

  if (route.key == "first") {
    return (
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View>
          <Text
            style={{
              color:
                colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text,
              fontSize: hp(15),
              fontWeight: "500",
            }}>
            Quick contacts
          </Text>
          <View
            style={[
              CommonStyles.row,
              {
                marginTop: hp(20),
              },
            ]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={[CommonStyles.row]}>
                {user.azaContacts.map((_contct, i) => (
                  <QuickContactView
                    firstName={_contct.firstName!}
                    lastName=""
                    photoUrl={getInitialsAvatar({
                      firstName: _contct.fullName!,
                      scheme: colorScheme,
                    })}
                    key={i}
                    onPress={() => azaContactOnPress(_contct)}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            placeholderTextColor={Colors[colorScheme].secondaryText}
            value={searchContact}
            returnKeyType="search"
            onChangeText={(text) => {
              setSearchContact(text);
            }}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 10,
              marginVertical: hp(35),
              borderBottomWidth: 1,
              borderBottomColor: Colors[colorScheme].separator,
              marginLeft: hp(5),
            }}
            placeholder="To (Search for a contact)"
          />
          <SectionList
            contentContainerStyle={{ paddingBottom: hp(300) }}
            showsVerticalScrollIndicator={false}
            stickyHeaderHiddenOnScroll={true}
            stickySectionHeadersEnabled={false}
            sections={[
              {
                title: "Contacts using Aza",
                data: user.azaContacts,
                azaContacts: true,
              },
              {
                title: "Contacts not using Aza yet",
                data: contacts.filter((_c) =>
                  _c.name.toUpperCase().includes(searchContact.toUpperCase())
                ),
                azaContacts: false,
              },
            ]}
            renderSectionHeader={({ section }) => (
              <SectionListSeparator
                title={section.title}
                listSize={section.data.length}
              />
            )}
            renderItem={({ section, item }) => {
              return section.azaContacts ? (
                item.azaAccountNumber && item.phone ? (
                  <TouchableOpacity
                    onPress={() => {
                      if (section.azaContacts) {
                        azaContactOnPress(item);
                      } else {
                        nonAzaContactOnPress(item);
                      }
                    }}>
                    <ContactListItem
                      image={getInitialsAvatar({
                        firstName: item?.fullName,
                        lastName: item.lastName,
                        scheme: colorScheme,
                      })}
                      name={item.fullName}
                      phoneNumber={item.phone || ""}
                      isContactOnAza={section.azaContacts}
                    />
                  </TouchableOpacity>
                ) : (
                  <></>
                )
              ) : item.firstName && item.phoneNumbers ? (
                <TouchableOpacity
                  onPress={() => {
                    if (section.azaContacts) {
                      azaContactOnPress(item);
                    } else {
                      nonAzaContactOnPress(item);
                    }
                  }}>
                  <ContactListItem
                    image={getInitialsAvatar({
                      firstName: item?.firstName,
                      lastName: item.lastName,
                      scheme: colorScheme,
                    })}
                    name={item.name}
                    phoneNumber={item.phoneNumbers[0].number || ""}
                    isContactOnAza={section.azaContacts}
                  />
                </TouchableOpacity>
              ) : (
                <></>
              );
            }}
          />
        </View>
      </View>
    );
  } else if (route.key === "second") {
    return (
      <View style={[styles.container, { justifyContent: "flex-start" }]}>
        <TextInput
          // lightColor={Colors.light.mainText}
          // darkColor={Colors.dark.mainText}
          placeholderTextColor={Colors[colorScheme].secondaryText}
          keyboardType={"number-pad"}
          returnKeyType={"send"}
          returnKeyLabel={"Send"}
          value={receipientAzaNumber}
          onChangeText={(number) => setReceipientAzaNumber(number)}
          style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 10,
            marginTop: hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors[colorScheme].separator,
            marginLeft: hp(5),
          }}
          placeholder="Aza Number"
        />
        <Button
          title="Send"
          style={{ marginVertical: hp(20) }}
          onPressButton={() => {
            sentToAzaNumber(receipientAzaNumber, azaContactOnPress);
          }}
          disabled={receipientAzaNumber.length < 5}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

const sentToAzaNumber = (
  azaNumber: string,
  azaContactOnPress: (beneficiary: Beneficiary) => void
) => {
  //do some check with aza number
  verifyAzaNumber(azaNumber).then((verifiedUser) => {
    if (verifiedUser) {
      azaContactOnPress(verifiedUser);
    } else {
    }
  });
};

const QuickContactView = ({
  firstName,
  lastName,
  photoUrl,
  key,
  onPress,
}: {
  firstName: string;
  lastName: string;
  photoUrl: string;
  key: number;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[CommonStyles.col, { alignItems: "center", marginRight: 20 }]}>
        <Image
          style={{
            borderRadius: 50,
            width: 45,
            height: 45,
          }}
          source={{
            uri: photoUrl,
          }}
        />
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{ fontSize: hp(12), marginTop: 5 }}>
          {firstName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

export default ContactsScene;
