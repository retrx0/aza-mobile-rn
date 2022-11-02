import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { UndrawCalendarIcon } from "../../../assets/svg";

const RecurringTransferScreen = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Recurring Money Transfer
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
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View>
          <Text
            // lightColor={Colors.light.text}
            // darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginLeft: hp(5),
            }}>
            You can add and edit daily, weekly and monthly recurring money
            transfer orders.
          </Text>
        </View>
        <View style={[CommonStyles.col]}>
          <UndrawCalendarIcon
            color={colorScheme === "dark" ? "#999999" : "#000"}
            size={30}
          />
        </View>
        <View style={[CommonStyles.col, { marginBottom: hp(65) }]}>
          <Button
            title="New Recurring Transfer"
            onPressButton={() =>
              navigation.navigate("SelectNewRecurringTransfer")
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
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default RecurringTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
