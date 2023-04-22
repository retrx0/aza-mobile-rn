import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import ContactListItem from "../../../../components/ListItem/ContactListItem";
import { AZALargeLightningLogo } from "../../../../../assets/svg";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import { selectUser } from "../../../../redux/slice/userSlice";
import { IBeneficiary } from "../../../../types/types.redux";

interface IProps {
  blockUserOnPress: (contact: IBeneficiary) => void;
}

const BlockByMobileNumberTab = ({ blockUserOnPress }: IProps) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const { azaContacts } = useAppSelector(selectUser);

  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View>
        <Text
          style={{
            fontSize: hp(14),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
          }}
        >
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Text>
        <Text
          style={{
            fontSize: hp(14),
            fontFamily: "Euclid-Circular-A",

            fontWeight: "400",
            marginTop: hp(30),
          }}
        >
          You can unblock these users anytime
        </Text>
        <View style={{ marginTop: hp(50) }}>
          <TextInput
            // placeholderTextColor={Colors[colorScheme].secondaryText}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 10,
              marginTop: hp(15),
              borderBottomWidth: 1,
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              marginLeft: hp(5),
            }}
            placeholder="Mobile Number"
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </View>
        <Text
          style={{
            marginTop: hp(40),
            fontSize: hp(14),
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(5),
            fontWeight: "400",
            marginBottom: hp(20),
          }}
        >
          Your Aza Contacts
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(300) }}
          showsVerticalScrollIndicator={false}
        >
          {azaContacts.data.map((contact, i) => (
            <TouchableOpacity key={i} onPress={() => blockUserOnPress(contact)}>
              <ContactListItem
                image={contact.pictureUrl!}
                name={contact.fullName}
                phoneNumber={contact.phone}
                isContactOnAza={true}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default BlockByMobileNumberTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
