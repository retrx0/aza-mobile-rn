import React, { useLayoutEffect } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

const EditBankAccountDetailsScreen = ({
  navigation,
}: CommonScreenProps<"EditBankAccountDetails">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Bank Account
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

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              marginVertical: hp(30),
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(5),
            }}>
            Details of your bank account
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Bank
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={"Access"}
            />
            <Image
              source={{
                uri: "https://pbs.twimg.com/profile_images/1112702246326845445/a-CBpIyN_400x400.png",
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Account Number
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={"123456789"}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Account Name
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={"james bond"}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Edit Account Details"
            onPressButton={() => navigation.goBack()}
          />
          <CancelButtonWithUnderline
            title="Delete Account"
            onPressButton={() => console.log("called")}
            styleText={CommonStyles.cancelStyle}
            style={[{ borderBottomColor: Colors.general.red }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default EditBankAccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
