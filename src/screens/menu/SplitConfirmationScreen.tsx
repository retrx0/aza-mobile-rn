import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { TextInput } from "../../theme/Themed";
import { View } from "../../theme/components/View";
import { Text } from "../../theme/components/Text";
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

const SplitConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitConfirmation">) => {
  const { amount, splitImage, name, contacts } = route.params;
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
          }}
        >
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
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(20),
              marginLeft: hp(5),
              fontWeight: "500",
            }}
          >
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ position: "relative" }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
                marginLeft: hp(5),
              }}
            >
              To
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              // placeholderTextColor={Colors[colorScheme].secondaryText}
              style={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",

                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "500",
                  marginLeft: hp(5),
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
            ]}
          >
            <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
              <Text
                // lightColor={Colors.light.secondaryText}
                // darkColor={Colors.dark.secondaryText}
                style={{
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "400",
                  marginLeft: hp(5),
                }}
              >
                Created By
              </Text>
              <View
                style={[
                  CommonStyles.row,
                  { alignSelf: "stretch", marginTop: 10 },
                ]}
              >
                <Image
                  style={{ borderRadius: 50, width: 30, height: 30 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                  }}
                />
                <Text
                  // lightColor={Colors.light.mainText}
                  // darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A",
                    fontSize: hp(16),
                    fontWeight: "500",
                    marginLeft: hp(10),
                  }}
                >
                  Chiazo
                </Text>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(14),
                    fontWeight: "500",
                    marginLeft: "auto",
                    color: "#FF361A",
                  }}
                >
                  {"\u20A6"}
                  {numberWithCommas(splitAmountForEachPerson.toFixed())}
                </Text>
              </View>
            </View>
            <View
              style={[
                CommonStyles.col,
                { alignSelf: "stretch", marginTop: 30 },
              ]}
            >
              <Text
                // lightColor={Colors.light.secondaryText}
                // darkColor={Colors.dark.secondaryText}
                style={{
                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(16),
                  fontWeight: "400",
                  marginLeft: hp(5),
                }}
              >
                Shared With
              </Text>
              {contacts.map(({ id, firstName }) => (
                <View
                  key={id}
                  style={[
                    CommonStyles.row,
                    { alignSelf: "stretch", marginTop: 10 },
                  ]}
                >
                  <Image
                    style={{ borderRadius: 50, width: 30, height: 30 }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    }}
                  />
                  <Text
                    // lightColor={Colors.light.mainText}
                    // darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A",
                      fontSize: hp(14),
                      fontWeight: "500",
                      marginLeft: hp(10),
                    }}
                  >
                    {firstName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Semi-Bold",
                      fontSize: hp(14),
                      fontWeight: "500",
                      marginLeft: "auto",
                      color: "#FF361A",
                    }}
                  >
                    {"\u20A6"}
                    {numberWithCommas(splitAmountForEachPerson.toFixed())}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={{ marginTop: 10 }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "400",
                marginLeft: hp(5),
              }}
            >
              Total Amount
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",

                  fontFamily: "Euclid-Circular-A",
                  fontSize: hp(14),
                  fontWeight: "500",
                  marginLeft: hp(5),
                },
              ]}
              showSoftInputOnFocus={false}
              value={"\u20A6 " + numberWithCommas(amount)}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={() => navigation.navigate("ChooseSplit")}
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
