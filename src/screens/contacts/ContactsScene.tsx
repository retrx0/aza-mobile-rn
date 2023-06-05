import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SectionList,
  TouchableOpacity,
} from "react-native";
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

import { useAppDispatch, useAppSelector } from "../../redux";
import {
  getUserSavedBankAccs,
  saveUserBankAcc,
  selectUser,
} from "../../redux/slice/userSlice";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { IBank, IBankAccount, IBeneficiary } from "../../types/types.redux";
import { NAIRA_CCY_CODE, PSB_BANK_CODE } from "../../constants/AppConstants";
import { verifyBankAccountAPI } from "../../api/account";
import { toastError } from "../../common/util/ToastUtil";
import { selectAppPreference } from "../../redux/slice/preferenceSlice";
import { UnderlinedInput } from "../../components/input/UnderlinedInput";
import Colors from "../../constants/Colors";
import Divider from "../../components/divider/Divider";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import { useNavigation } from "@react-navigation/native";
import BankSearchResultView from "../bvn/BankSearchResultView";
import { selectBank } from "../../redux/slice/bankSlice";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import ActivityModal from "../../components/modal/ActivityModal";
import CustomSwitch from "../../components/switch/CustomSwitch";
import BeneficiaryBankAccountListItem from "./BeneficiaryBankAccountListItem";

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
  const { bankAccounts } = useAppSelector(selectUser);
  const [contacts, setContacts] = useState<any[]>([]);
  const [userQuickContacts, setUserQuickContacts] = useState<IBeneficiary[]>(
    []
  );
  const navigation = useNavigation();

  const [userAzaContacts, setUserAzaContacts] = useState<IBeneficiary[]>([]);
  const [searchContact, setSearchContact] = useState("");
  const [receipientAccountNumber, setReceipientAccountNumber] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(false);
  const user = useAppSelector(selectUser);

  const { contactVisibilitySwitch } = useAppSelector(selectAppPreference);
  const [searchBanksModalVisisble, setSearchBanksModalVisisble] =
    useState(false);
  const [selectedBank, setSelectedBank] = useState<IBank>();
  const [receipientAccountName, setReceipientAccountName] = useState("");
  const [accountVerified, setAccountVerified] = useState(false);
  const [saveAccountAsBeneficiary, setSaveAccountAsBeneficiary] =
    useState(false);
  const [beneficiariesModalVisible, setBeneficiariesModalVisible] =
    useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!bankAccounts.loaded) dispatch(getUserSavedBankAccs());
    console.log(bankAccounts.data);
    getUserContacts().then((_contacts) => {
      if (_contacts) {
        setContacts(_contacts.filter((_c) => _c.contactType === "person"));
        setUserQuickContacts(user.azaContacts.data);
        setUserAzaContacts(user.azaContacts.data);
      }
    });
  }, []);

  const handleSendToAccountNumber = ({
    receipientBank,
  }: {
    receipientBank: IBank;
  }) => {
    if (receipientBank.bankCode === PSB_BANK_CODE) {
      navigation.navigate("Common", {
        screen: "TransactionKeypad",
        params: {
          headerTitle: "Send to Aza Number",
          transactionType: {
            transaction: "send",
            type: "normal",
            beneficiary: {
              accountNumber: receipientAccountNumber,
              bankCode: receipientBank.bankCode,
              fullName: receipientAccountName,
            },
            openDescriptionModal: false,
          },
        },
      });
    } else {
      if (saveAccountAsBeneficiary)
        dispatch(
          saveUserBankAcc({
            accountName: receipientAccountName,
            accountNumber: receipientAccountNumber,
            bankCode: receipientBank.bankCode,
            isBeneficiary: true,
          })
        )
          .unwrap()
          .then(() => {
            dispatch(getUserSavedBankAccs());
          })
          .catch((e) => {
            console.error(e);
            toastError("Sorry we couldn't save your beneficiary ☹️");
          });
      navigation.navigate("Common", {
        screen: "TransactionKeypad",
        params: {
          headerTitle: "Send to Bank Account",
          transactionType: {
            transaction: "withdraw",
            type: "normal",
            beneficiary: {
              accountNumber: receipientAccountNumber,
              bankCode: receipientBank.bankCode,
              fullName: receipientAccountName,
            },
            openDescriptionModal: false,
          },
        },
      });
    }
  };

  if (route.key == "second") {
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
                        }}
                      >
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
                      }}
                    >
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
  } else if (route.key === "first") {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={CommonStyles.vaultcontainer}
      >
        <View style={{ paddingHorizontal: hp(20) }}>
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Bold",
                fontSize: hp(16),
                fontWeight: "400",
              }}
            >
              Saved Beneficiaries
            </Text>
            <TouchableOpacity
              onPress={() => {
                setBeneficiariesModalVisible((v) => !v);
              }}
            >
              <Text
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Euclid-Circular-A",
                  paddingBottom: 5,
                  marginTop: hp(10),
                  borderBottomWidth: 1,
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                  fontSize: hp(16),
                  fontWeight: "500",
                }}
              >
                {"Choose from already saved accounts"}
              </Text>
            </TouchableOpacity>
            <Divider />
          </View>

          <View style={{ marginTop: hp(35) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
              }}
            >
              Bank
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSearchBanksModalVisisble((t) => !t);
              }}
            >
              <Text
                style={{
                  marginBottom: 5,
                  marginTop: 10,
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(16),
                }}
              >
                {selectedBank ? selectedBank.bankName : "Choose bank"}
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
              }}
            >
              Account Number
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].text}
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
              onChangeText={(txt) => {
                setReceipientAccountNumber(txt);

                if (txt.length === 10) {
                  if (selectedBank) {
                    setScreenLoading(true);
                    verifyBankAccountAPI(
                      selectedBank.bankCode,
                      txt,
                      user.azaAccountNumber
                    )
                      .then((res) => {
                        setReceipientAccountName(res.data.name);
                        setAccountVerified(true);
                        setScreenLoading(false);
                      })
                      .catch((e) => {
                        setAccountVerified(false);
                        setScreenLoading(false);
                      });
                  }
                }
              }}
              value={receipientAccountNumber}
              editable={selectedBank !== undefined}
            />
          </View>
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "400",
              }}
            >
              Account Name
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].text}
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
              editable={false}
              value={receipientAccountName}
            />
          </View>
          <View
            style={[
              CommonStyles.row,
              { marginTop: 35, justifyContent: "flex-start" },
            ]}
          >
            <Text style={{ paddingHorizontal: 25 }}>Save as beneficiary?</Text>
            <CustomSwitch
              isEnabled={saveAccountAsBeneficiary}
              onSwitchToggle={() => setSaveAccountAsBeneficiary((v) => !v)}
            />
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
          <Button
            title="Continue"
            onPressButton={() => {
              if (selectedBank) {
                handleSendToAccountNumber({ receipientBank: selectedBank });
              }
              // sentToAzaNumber(receipientAzaNumber, azaContactOnPress);
            }}
            disabled={
              receipientAccountNumber.length < 10 ||
              !selectedBank ||
              !accountVerified
            }
            styleText={{}}
            style={[]}
            buttonLoading={buttonLoading}
          />
        </View>
        <Modal
          visible={beneficiariesModalVisible}
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginTop: 50,
          }}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setBeneficiariesModalVisible((v) => !v)}
          collapsable
        >
          // TODO correct filter flag below!
          <View style={{ height: "100%", paddingTop: 30 }}>
            {bankAccounts.data
              .filter((_b) => !_b.isBeneficiary)
              .map((_bankAcc, i) => {
                return (
                  <BeneficiaryBankAccountListItem
                    bankAccount={_bankAcc}
                    onPress={() => {
                      setSelectedBank({
                        bankCode: _bankAcc.bankCode,
                        bankName: _bankAcc.bankName,
                        logoUrl: _bankAcc.bankLogo!,
                        id: Number(_bankAcc.id),
                      });
                      setAccountVerified(true);
                      setReceipientAccountNumber(_bankAcc.accountNumber);
                      setReceipientAccountName(_bankAcc.accountName);
                      setBeneficiariesModalVisible((v) => !v);
                    }}
                    key={i}
                  />
                );
              })}
          </View>
        </Modal>
        <Modal
          visible={searchBanksModalVisisble}
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginTop: 50,
          }}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setSearchBanksModalVisisble((v) => !v)}
          collapsable
        >
          <View style={{ height: "100%", paddingTop: 50 }}>
            <BankSearchResultView
              onPress={(bank) => {
                setSelectedBank(bank);
                setSearchBanksModalVisisble((f) => !f);
              }}
            />
          </View>
        </Modal>
        <ActivityModal loading={screenLoading} />
      </KeyboardAvoidingView>
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
