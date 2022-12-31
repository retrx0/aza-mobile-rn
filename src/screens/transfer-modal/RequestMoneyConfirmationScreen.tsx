import React, { useLayoutEffect } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { TextInput } from "../../theme/Themed";
import { View } from "../../theme/components/View";
import { Text } from "../../theme/components/Text";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useAppSelector } from "../../redux";
import { selectTransaction } from "../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RequestMoneyConfirmationScreen = ({
  navigation,
}: CommonScreenProps<"RequestMoneyConfirmation">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  console.log(useAppSelector(selectTransaction));

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

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(15),
              fontWeight: "500",
              marginBottom: hp(50),
            }}
          >
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              To
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,

                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={"Chiazondu Joseph"}
            />
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                },
              ]}
            >
              <TextInput
                // lightColor={Colors.light.mainText}
                // darkColor={Colors.dark.mainText}
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors[colorScheme].separator,
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
                showSoftInputOnFocus={false}
                value={"\u20A680,000"}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Description
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={"Chop life my gee ❤️"}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button
          title="Continue"
          onPressButton={() =>
            navigation.navigate("StatusScreen", {
              status: "Successful",
              statusIcon: "Success",
              //TODO update message to accept JSX
              statusMessage:
                "You have successfully requested for 80,000 from Chiazondu Joseph",
              navigateTo: "Home",
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
          title="Cancel Transaction"
          color={Colors.general.red}
          styleText={CommonStyles.cancelStyle}
          onPressButton={() => navigation.goBack()}
          style={{ marginTop: 5 }}
        />
      </View>
    </SpacerWrapper>
  );
};

export default RequestMoneyConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: hp(23),
  },
});
