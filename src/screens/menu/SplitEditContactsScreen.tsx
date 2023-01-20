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
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import EditContactItem from "./components/split/EditContactItem";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";

const SplitEditContactsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitEditContacts">) => {
  const [contactsToEdit, setContactsToEdit] = useState<Contact[]>([]);
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

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

  const { amount, date, splitImage, name, contacts } = route.params;

  useEffect(() => {
    setContactsToEdit(contacts);
  }, []);

  const removePerson = (id: Contact["id"]) => {
    setContactsToEdit(contactsToEdit.filter((contact) => contact.id !== id));
    if (contactsToEdit.length === 1) {
      navigation.goBack();
    }
  };

  const splitAmountForEachPerson = Number(amount) / contactsToEdit.length + 1;

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
        <EditContactItem
          amount={splitAmountForEachPerson}
          editable={true}
          firstName={user.firstName}
          deleteable
          navigation={navigation}
          onClickDelete={() => null}
          pictureUrl={user.pictureUrl!}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {contactsToEdit.map(({ name, id }) => (
            <EditContactItem
              key={id}
              amount={splitAmountForEachPerson}
              editable={true}
              firstName={name}
              navigation={navigation}
              deleteable
              onClickDelete={() => removePerson(id)}
              pictureUrl={getDefaultPictureUrl({
                firstName: name,
                scheme: appTheme,
              })}
            />
          ))}
        </ScrollView>

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
            styleText={{}}
            style={[]}
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
