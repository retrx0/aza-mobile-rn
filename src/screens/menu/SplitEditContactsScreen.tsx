import React, { useState, useEffect } from "react";
import { LayoutAnimation, ScrollView } from "react-native";
import { Contact } from "expo-contacts";

import { CommonScreenProps } from "../../common/navigation/types";

import { View } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";
import SplitListItem from "./components/SplitListItem";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import EditContactItem from "./components/split/EditContactItem";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const SplitEditContactsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitEditContacts">) => {
  const [contactsToEdit, setContactsToEdit] = useState<Contact[]>([]);
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  useNavigationHeader(navigation, "Split");

  const { amount, date, splitImage, name, contacts } = route.params;

  useEffect(() => {
    setContactsToEdit(contacts);
  }, []);

  const removePerson = (id: Contact["id"]) => {
    LayoutAnimation.easeInEaseOut();
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
