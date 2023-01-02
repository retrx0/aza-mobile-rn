import { Contact } from "expo-contacts";
import React, { useEffect, useState } from "react";
import { SectionList, StyleSheet, TouchableOpacity } from "react-native";
import { verifyAzaNumber } from "../../api/aza";
import { Beneficiary, CommonScreenProps } from "../../common/navigation/types";
import CommonStyles from "../../common/styles/CommonStyles";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import { hp } from "../../common/util/LayoutUtil";
import Button from "../../components/buttons/Button";
import ContactListItem from "../../components/ListItem/ContactListItem";
import { TextInput, View, Text, ScrollView } from "../../theme/Themed";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import useColorScheme from "../../hooks/useColorScheme";
import { getUserContacts } from "../../hooks/useContacts";
import { selectUser } from "../../redux/slice/userSlice";
import SectionListSeparator from "../tabs/home/components/SectionListSeparator";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuickContactView } from "./QuickContactView";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";

const ContactsScene = ({
  route,
  azaContactOnPress,
  nonAzaContactOnPress,
}: {
  route: any;
  azaContactOnPress: (beneficiary: Beneficiary) => void;
  nonAzaContactOnPress: (beneficiary: Beneficiary) => void;
}) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [contacts, setContacts] = useState<any[]>([]);
  const [userQuickContacts, setUserQuickContacts] = useState<Beneficiary[]>([]);
  const [userAzaContacts, setUserAzaContacts] = useState<Beneficiary[]>([]);
  const [searchContact, setSearchContact] = useState("");
  const [receipientAzaNumber, setReceipientAzaNumber] = useState("");
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);

  useEffect(() => {
    getUserContacts().then((_contacts) => {
      if (_contacts) {
        setContacts(_contacts.filter((_c) => _c.contactType === "person"));
        setUserQuickContacts(user.azaContacts.data);
        setUserAzaContacts(user.azaContacts.data);
      }
    });
  }, []);

  if (route.key == "first") {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: hp(20) }}>
            <View>
              <Text
                style={{
                  fontSize: hp(14),
                  fontWeight: "500",
                  marginLeft: hp(5),
                  marginTop: hp(30),
                  marginBottom: hp(24),
                }}
              >
                Quick contacts
              </Text>
              <View>
                <View style={{ flexDirection: "row", marginBottom: hp(50) }}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {user.azaContacts.data.map((_contct, i) => (
                      <QuickContactView
                        firstName={_contct.firstName!}
                        lastName=""
                        photoUrl={getInitialsAvatar({
                          firstName: _contct.fullName!,
                          scheme: appTheme,
                        })}
                        onPress={() => azaContactOnPress(_contct)}
                        key={i}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>

              <TextInput
                lightColor={Colors.light.mainText}
                darkColor={Colors.dark.mainText}
                // placeholderTextColor={Colors[colorScheme].secondaryText}
                value={searchContact}
                returnKeyType="search"
                onChangeText={(text) => {
                  setSearchContact(text);
                }}
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Euclid-Circular-A",
                  paddingBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                  marginLeft: hp(5),
                  fontSize: hp(16),
                }}
                placeholder="To (Search for a contact)"
              />
              <View style={{ marginLeft: 5 }}>
                <SectionList
                  contentContainerStyle={{ paddingBottom: hp(300) }}
                  showsVerticalScrollIndicator={false}
                  stickyHeaderHiddenOnScroll={true}
                  stickySectionHeadersEnabled={false}
                  sections={[
                    {
                      title: "Contacts using Aza",
                      data: user.azaContacts.data.filter((_c) =>
                        _c.fullName
                          .toUpperCase()
                          .includes(searchContact.toUpperCase())
                      ),
                      azaContacts: false,
                    },
                    {
                      title: "Contacts not using Aza yet",
                      data: contacts.filter(
                        (_c) =>
                          _c.firstName
                            ?.toUpperCase()
                            .includes(searchContact.toUpperCase()) ||
                          _c.lastName
                            ?.toUpperCase()
                            .includes(searchContact.toUpperCase())
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
                          }}
                        >
                          <ContactListItem
                            image={getInitialsAvatar({
                              firstName: item?.fullName,
                              lastName: item.lastName,
                              scheme: appTheme,
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
                        }}
                      >
                        <ContactListItem
                          image={getInitialsAvatar({
                            firstName: item?.firstName,
                            lastName: item.lastName,
                            scheme: appTheme,
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
          </View>
        </View>
      </SpacerWrapper>
    );
  } else if (route.key === "second") {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: hp(20) }}>
            <Text
              style={{
                fontSize: hp(14),
                fontWeight: "500",
                marginLeft: hp(5),
                marginTop: hp(30),
                marginBottom: hp(24),
              }}
            >
              Recents
            </Text>
            <View>
              <View style={{ flexDirection: "row", marginBottom: hp(37) }}>
                {user.azaContacts.data.map((_contct, i) => (
                  <QuickContactView
                    firstName={_contct.firstName!}
                    lastName=""
                    photoUrl={getInitialsAvatar({
                      firstName: _contct.fullName!,
                      scheme: appTheme,
                    })}
                    onPress={() => azaContactOnPress(_contct)}
                    key={i}
                  />
                ))}
              </View>
            </View>
            <TextInput
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
                fontSize: hp(16),
                marginLeft: hp(5),
              }}
              placeholder="Aza Number"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              title="Send"
              onPressButton={() => {
                sentToAzaNumber(receipientAzaNumber, azaContactOnPress);
              }}
              disabled={receipientAzaNumber.length < 5}
              styleText={{}}
              style={[]}
            />
          </View>
        </View>
      </SpacerWrapper>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

export default ContactsScene;
