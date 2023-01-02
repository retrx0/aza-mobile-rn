import React, { useLayoutEffect } from "react";
import { StyleSheet, Image } from "react-native";

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
import { UnderlinedInput } from "../../components/input/UnderlinedInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RecurringTransferConfirmationScreen = ({
  navigation,
}: CommonScreenProps<"RecurringTransferConfirmation">) => {
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
              marginVertical: hp(20),
              fontWeight: "500",
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
                color: colorScheme === "dark" ? "#999999" : "#000000",
              }}
            >
              To
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              // placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={"Chiazondu Joseph"}
              keyboardAppearance="default"
              keyboardType="default"
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
            <UnderlinedInput
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={{
                fontFamily: "Euclid-Circular-A",
                fontWeight: "500",
                fontSize: hp(16),
                color: colorScheme === "dark" ? "#999999" : "#000000",
              }}
              label="Amount"
              value={"\u20A680000"}
              keyboardType="number-pad"
              // placeholderTextColor={
              //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
              // }
              returnKeyType="done"
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <UnderlinedInput
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={{
                fontFamily: "Euclid-Circular-A",
                fontWeight: "500",
                fontSize: hp(16),
                color: colorScheme === "dark" ? "#999999" : "#000000",
              }}
              label="Period"
              value="Weekly"
              // placeholderTextColor={
              //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
              // }
            />
          </View>

          <UnderlinedInput
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "500",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label="Day"
            value="Wednesday"
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
          />
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
              navigation.push("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage: "Your recurring transfer was setup successfully",
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
              CommonStyles.button,
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
      </View>
    </SpacerWrapper>
  );
};

export default RecurringTransferConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: hp(23),
  },

  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
});
