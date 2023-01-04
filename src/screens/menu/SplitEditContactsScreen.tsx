import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Contact } from "expo-contacts";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";
import SplitListItem from "./components/SplitListItem";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import { EditIcon, TrashIcon } from "../../../assets/svg";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SplitEditContactsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitEditContacts">) => {
  const [contactsToEdit, setContactsToEdit] = useState<Contact[]>([]);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

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
    setContactsToEdit(contacts);
  }, []);

  const removePerson = (id: Contact["id"]) => {
    setContactsToEdit(contactsToEdit.filter((contact) => contact.id !== id));
    if (contactsToEdit.length === 1) {
      navigation.goBack();
    }
  };
  const { amount, date, splitImage, name, contacts } = route.params;

  const splitAmountForEachPerson = Number(amount) / (contactsToEdit.length + 1);

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
          />
          <Divider />
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <View
            style={[
              CommonStyles.row,
              {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: hp(25),
              },
            ]}
          >
            <Image
              style={{ borderRadius: 50, width: 45, height: 45 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
              }}
            />
            <View
              style={[
                CommonStyles.col,
                { marginLeft: 20, marginRight: "auto" },
              ]}
            >
              <Text
                // lightColor={Colors.light.text}
                // darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "500",
                }}
              >
                Chiazo
              </Text>
              <Text
                style={{
                  fontSize: hp(14),
                  marginTop: 5,
                  color: "#FF361A",
                  fontWeight: "400",
                }}
              >
                {"\u20A6"}
                {numberWithCommas(splitAmountForEachPerson.toFixed())}
              </Text>
            </View>
            <View style={[CommonStyles.row]}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() =>
                  navigation.navigate("SplitEditContact", {
                    contactName: "Chiazo",
                    contactImage:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    contactSplitAmount: splitAmountForEachPerson
                      .toFixed()
                      .toString(),
                  })
                }
              >
                <EditIcon color="#A6A6A6" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("deleted request creator")}
              >
                <TrashIcon color="#FF361A" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {contactsToEdit.map(({ name, id }) => (
              <View
                key={id}
                style={[
                  CommonStyles.row,
                  {
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    marginTop: hp(25),
                  },
                ]}
              >
                <Image
                  style={{ borderRadius: 50, width: 45, height: 45 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                  }}
                />
                <View
                  style={[
                    CommonStyles.col,
                    { marginRight: "auto", marginLeft: 20 },
                  ]}
                >
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.mainText}
                    style={{
                      fontSize: hp(16),
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontWeight: "500",
                    }}
                  >
                    {name}
                  </Text>
                  <Text
                    style={{
                      fontSize: hp(12),
                      marginTop: hp(5),
                      color: "#FF361A",
                    }}
                  >
                    {"\u20A6"}
                    {numberWithCommas(splitAmountForEachPerson.toFixed())}
                  </Text>
                </View>
                <View style={[CommonStyles.row]}>
                  <TouchableOpacity
                    style={{ marginRight: 20 }}
                    onPress={() =>
                      navigation.navigate("SplitEditContact", {
                        contactName: name,
                        contactImage:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                        contactSplitAmount: splitAmountForEachPerson
                          .toFixed()
                          .toString(),
                      })
                    }
                  >
                    <EditIcon color="#A6A6A6" size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removePerson(id)}>
                    <TrashIcon color="#FF361A" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={() =>
              navigation.navigate("SplitConfirmation", {
                amount,
                splitImage,
                name,
                contacts: contactsToEdit,
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
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

export default SplitEditContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
