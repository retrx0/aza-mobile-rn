import React, { useEffect, useState } from "react";
import { SectionList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from "../../components/buttons/Button";
import ContactListItem from "../../components/ListItem/ContactListItem";
import { TextInput, View, Text, ScrollView } from "../../theme/Themed";
import SectionListSeparator from "../tabs/home/components/SectionListSeparator";
import { QuickContactView } from "./QuickContactView";

import CommonStyles from "../../common/styles/CommonStyles";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import { hp } from "../../common/util/LayoutUtil";

import { getUserContacts } from "../../hooks/useContacts";

import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { IBeneficiary } from "../../types/types.redux";
import { NAIRA_CCY_CODE, PSB_BANK_CODE } from "../../constants/AppConstants";
import { verifyBankAccountAPI } from "../../api/account";
import { toastError } from "../../common/util/ToastUtil";
import { selectAppPreference } from "../../redux/slice/preferenceSlice";
import { UnderlinedInput } from "../../components/input/UnderlinedInput";
import Colors from "../../constants/Colors";
import Divider from "../../components/divider/Divider";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import { useNavigation } from "@react-navigation/native";

const ContactsScene = ({
  route,
  azaContactOnPress,
  nonAzaContactOnPress,
}: {
  route: any;

  azaContactOnPress: (beneficiary: IBeneficiary) => void;
  nonAzaContactOnPress: (beneficiary: IBeneficiary) => void;
}) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [contacts, setContacts] = useState<any[]>([]);
  const [userQuickContacts, setUserQuickContacts] = useState<IBeneficiary[]>(
    []
  );
  const navigation = useNavigation();

  const [userAzaContacts, setUserAzaContacts] = useState<IBeneficiary[]>([]);
  const [searchContact, setSearchContact] = useState("");
  const [receipientAzaNumber, setReceipientAzaNumber] = useState("");
  const insets = useSafeAreaInsets();
  const [buttonLoading, setButtonLoading] = useState(false);
  const user = useAppSelector(selectUser);
  const { contactVisibilitySwitch } = useAppSelector(selectAppPreference);

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
              }}>
              Quick contacts
            </Text>
            <View>
              <View style={{ flexDirection: "row", marginBottom: hp(50) }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {user.azaContacts.data.map((_contct, i) => (
                    <QuickContactView
                      firstName={_contct.firstName!}
                      lastName=""
                      photoUrl={getDefaultPictureUrl({
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
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
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
                    title: contactVisibilitySwitch ? "Contacts using Aza" : "",
                    data: contactVisibilitySwitch
                      ? user.azaContacts.data.filter((_c) =>
                          _c.fullName
                            .toUpperCase()
                            .includes(searchContact.toUpperCase())
                        )
                      : [],
                    azaContacts: true,
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
                    showListSize={
                      section.azaContacts &&
                      (contactVisibilitySwitch ? contactVisibilitySwitch : true)
                    }
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
                          image={getDefaultPictureUrl({
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
                      }}>
                      <ContactListItem
                        image={getDefaultPictureUrl({
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
    );
  } else if (route.key === "second") {
    return (
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Bold",
                fontSize: hp(16),
                fontWeight: "400",
              }}>
              Saved Beneficiaries
            </Text>
            <TextInput
              placeholderTextColor={Colors.light.secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(10),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="Choose from already saved accounts"
              keyboardType="number-pad"
              returnKeyType="done"
              // value="Choose from already saved accounts"
            />
          </View>

          <View style={{ marginTop: hp(35) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
              }}>
              Bank
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SearchBank", {});
              }}>
              <Text
                style={{
                  marginBottom: 5,
                  marginTop: 10,
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(16),
                }}>
                Choose Bank
              </Text>
            </TouchableOpacity>
            <Divider />
          </View>
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "400",
              }}>
              Account Number
            </Text>
            <TextInput
              placeholderTextColor={Colors.general.black}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",

                paddingBottom: 5,
                marginTop: hp(10),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="Account Number"
              keyboardType="number-pad"
              returnKeyType="done"
              // value=
            />
          </View>
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "400",
              }}>
              Account Name
            </Text>
            <TextInput
              placeholderTextColor={Colors.general.black}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",

                paddingBottom: 5,
                marginTop: hp(10),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="Account Name"
              keyboardType="number-pad"
              returnKeyType="done"
              // value="Choose Bnak"
            />
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
          <Button
            title="Continue"
            // onPressButton={() => {
            //   sentToAzaNumber(receipientAzaNumber, azaContactOnPress);
            // }}
            // disabled={receipientAzaNumber.length < 10}
            styleText={{}}
            style={[]}
            buttonLoading={buttonLoading}
          />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default ContactsScene;

// const { screenType } = route.params;

// const sentToAzaNumber = (
//   azaNumber: string,
//   azaContactOnPress: (beneficiary: IBeneficiary) => void
// ) => {
//   setButtonLoading(true);
//   //do some check with aza number
//   verifyBankAccountAPI(PSB_BANK_CODE, azaNumber, azaNumber)
//     .then((response) => {
//       if (response) {
//         azaContactOnPress({
//           accountNumber: azaNumber,
//           fullName: response.data.name,
//           beneficiaryName: response.data.name,
//           currency: NAIRA_CCY_CODE,
//           email: "",
//           firstName: "",
//           lastName: "",
//         });
//       }
//       setButtonLoading(false);
//     })
//     .catch((e) => {
//       console.debug(e);
//       toastError("Aza account not found!");
//       setButtonLoading(false);
//     });
// };

{
  /* <Text
            style={{
              fontSize: hp(14),
              fontWeight: "500",
              marginLeft: hp(5),
              marginTop: hp(30),
              marginBottom: hp(24),
            }}>
            Recents
          </Text> */
}
{
  /* <View>
            <View style={{ flexDirection: "row", marginBottom: hp(37) }}>
              {user.azaContacts.data.map((_contct, i) => (
                <QuickContactView
                  firstName={_contct.firstName!}
                  lastName=""
                  photoUrl={getDefaultPictureUrl({
                    firstName: _contct.fullName!,
                    scheme: appTheme,
                  })}
                  onPress={() => azaContactOnPress(_contct)}
                  key={i}
                />
              ))}
            </View>
          </View> */
}
