import React, { useLayoutEffect } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../../../components/Themed";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";

const EditBankAccountDetailsScreen = ({
  navigation,
}: CommonScreenProps<"EditBankAccountDetails">) => {
  const colorScheme = useColorScheme();

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
      <View style={styles.container}>
        <View>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              marginVertical: hp(30),
              fontFamily: "Euclid-Circular-A",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(5),
            }}>
            Details of your bank account
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Bank
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                marginLeft: hp(5),
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
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Account Number
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                marginLeft: hp(5),
              }}
              value={"123456789"}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Account Name
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                marginLeft: hp(5),
              }}
              value={"james bond"}
            />
          </View>
        </View>
        <View style={{ marginBottom: hp(65) }}>
          <Button
            title="Edit Account Details"
            onPressButton={() => navigation.goBack()}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
                width: "100%",
              },
              CommonStyles.button,
            ]}
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
