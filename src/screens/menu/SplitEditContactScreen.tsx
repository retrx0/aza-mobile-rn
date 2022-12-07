import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SplitEditContactScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitEditContact">) => {
  const { contactSplitAmount, contactImage, contactName } = route.params;
  const [editedAmount, setEditedAmount] = useState(contactSplitAmount);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.mainText}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Edit
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
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
              marginBottom: hp(50),
              fontWeight: "500",
              marginLeft: hp(5),
            }}>
            You can edit the split amount
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: hp(14),
                marginLeft: hp(5),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A",
              }}>
              With whom?
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={[
                styles.input1,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              showSoftInputOnFocus={false}
              value={contactName}
              keyboardType="default"
            />
            <Image
              source={{
                uri: contactImage,
              }}
              style={styles.contactImage}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(14),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                  marginLeft: 5,
                },
              ]}>
              <Text
                // lightColor={Colors.light.mainText}
                // darkColor={Colors.dark.mainText}
                style={{ position: "absolute", paddingBottom: 5 }}>
                {"\u20A6"}
              </Text>
              <TextInput
                // lightColor={Colors.light.mainText}
                // darkColor={Colors.dark.mainText}
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={[
                  styles.input2,
                  {
                    borderBottomColor:
                      colorScheme === "dark" ? "#262626" : "#EAEAEC",
                  },
                ]}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={(e) => setEditedAmount(e.replace(/[^0-9]/g, ""))}
                value={numberWithCommas(editedAmount)}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Confirm"
            onPressButton={() => navigation.goBack()}
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

export default SplitEditContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingVertical: hp(20),
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input1: {
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 5,
    marginTop: hp(15),
    borderBottomWidth: 1,
    fontSize: hp(14),
    marginLeft: 5,
  },
  contactImage: {
    position: "absolute",
    right: 0,
    bottom: hp(10),
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "white",
  },
  input2: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 5,
    paddingLeft: 10,
    borderBottomWidth: 1,
    fontSize: hp(14),
  },
});
