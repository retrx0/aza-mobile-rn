import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View } from "../../theme/components/View";
import { Text } from "../../theme/components/Text";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CloseIcon, UndrawCalendarIcon } from "../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../components/buttons/ExitButton";

const SetNewRecurringTransfer = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

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
          }}
        >
          Recurring Money Transfer
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerRight: () => <ExitButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={[CommonStyles.descriptionStyle, { marginLeft: 20 }]}
        >
          You can add and edit daily, weekly and monthly recurring money
          transfer orders.
        </Text>

        <View style={{ marginTop: hp(70), alignSelf: "center" }}>
          <UndrawCalendarIcon
            color={colorScheme === "dark" ? "#999999" : "#000"}
            size={30}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
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
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SetNewRecurringTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
