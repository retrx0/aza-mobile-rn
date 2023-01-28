import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { View, Text, TextInput } from "../../theme/Themed";

import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import SplitDetailItem from "./components/split/SplitDetailItem";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";

const SplitConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitConfirmation">) => {
  const { amount, splitImage, name, contacts } = route.params;
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
          }}>
          Confirmation
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

  const splitAmountForEachPerson = Number(amount) / (contacts.length + 1);

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(20),
              marginLeft: hp(5),
              fontWeight: "500",
            }}>
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
                marginLeft: hp(5),
              }}>
              To
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "500",
                  marginLeft: hp(5),

                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              showSoftInputOnFocus={false}
              value={name}
            />
            <Image
              source={{
                uri: splitImage,
              }}
              style={[styles.splitImage]}
            />
          </View>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
            style={[
              CommonStyles.col,
              {
                alignSelf: "stretch",
                paddingVertical: hp(30),
                maxHeight: hp(300),
              },
            ]}>
            <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "400",
                  marginLeft: hp(5),
                }}>
                Created By
              </Text>
              <SplitDetailItem
                amount={splitAmountForEachPerson}
                firstName={user.firstName}
                fontSize={16}
                pictureUrl={user.pictureUrl!}
              />
            </View>
            <View
              style={[
                CommonStyles.col,
                { alignSelf: "stretch", marginTop: 30 },
              ]}>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "400",
                  marginLeft: hp(5),
                }}>
                Shared With
              </Text>
              {contacts.map(({ id, firstName, name }) => (
                <SplitDetailItem
                  key={id}
                  amount={splitAmountForEachPerson}
                  firstName={firstName ? firstName : name}
                  fontSize={14}
                  pictureUrl={getDefaultPictureUrl({
                    firstName: name,
                    scheme: appTheme,
                  })}
                />
              ))}
            </View>
          </ScrollView>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "400",
                marginLeft: hp(5),
              }}>
              Total Amount
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(14),
                  fontWeight: "500",
                  marginLeft: hp(5),

                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              showSoftInputOnFocus={false}
              value={NAIRA_UNICODE + " " + numberWithCommas(amount)}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Confirm"
            onPressButton={() => navigation.navigate("ChooseSplit")}
            styleText={{}}
            style={[]}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SplitConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingVertical: hp(10),
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 5,
    marginTop: hp(15),
    borderBottomWidth: 1,
  },
  splitImage: {
    position: "absolute",
    right: 0,
    bottom: hp(10),
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
