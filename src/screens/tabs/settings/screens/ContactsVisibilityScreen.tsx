import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";
import ContactListItem from "../../../../components/ListItem/ContactListItem";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  selectAppPreference,
  setAppPreference,
} from "../../../../redux/slice/preferenceSlice";

const ContactsVisibilityScreen = ({
  navigation,
}: CommonScreenProps<"ContactVisibility">) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const dispatch = useAppDispatch();
  const preferences = useAppSelector(selectAppPreference);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.contactVisibilitySwitch !== undefined &&
        setIsEnabled(setting?.contactVisibilitySwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ contactVisibilitySwitch: isEnabled });
    dispatch(
      setAppPreference({
        ...preferences,
        contactVisibilitySwitch: isEnabled,
      })
    );
  }, [isEnabled]);

  useNavigationHeader(navigation, "Contacts Visibility");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",

            fontWeight: "500",
          }}
        >
          You can disable this setting if you want to prevent other users from
          seeing you labeled as an Aza user in their contacts.
        </Text>

        <Text
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",

            fontWeight: "500",
            marginTop: hp(30),
          }}
        >
          In turn, Aza users in your contact won't be labeled as such.
        </Text>
        <View style={{ marginTop: hp(50) }}>
          <Divider />
          <SettingsSwitch
            text={"Contact Visibility"}
            isEnabled={isEnabled}
            onSwitchToggle={() => {
              setIsEnabled(!isEnabled);
            }}
          />

          <View
            style={[
              CommonStyles.col,
              { alignSelf: "flex-start", marginTop: 30 },
            ]}
          >
            <View
              style={[
                CommonStyles.row,
                { alignItems: "flex-end", alignSelf: "flex-start" },
              ]}
            >
              <Text
                style={{
                  fontSize: hp(14),
                  fontFamily: "Euclid-Circular-A",
                  marginLeft: hp(5),
                  fontWeight: "400",
                }}
              >
                Contacts using Aza
              </Text>
              <Text
                lightColor={"#753FF6"}
                darkColor={"#2A9E17"}
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  fontFamily: "Euclid-Circular-A-Light",
                }}
              >
                +18
              </Text>
            </View>
            <ContactListItem
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
              name={"Adewale Adeyesufu"}
              phoneNumber={"8012345678"}
              isContactOnAza={true}
            />
          </View>
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ContactsVisibilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
