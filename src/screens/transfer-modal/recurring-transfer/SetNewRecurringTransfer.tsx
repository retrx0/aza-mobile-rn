import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../../common/navigation/types";

import BackButton from "../../../components/buttons/BackButton";
import { View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { CloseIcon, UndrawCalendarIcon } from "../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../components/buttons/ExitButton";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

const SetNewRecurringTransfer = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
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
        <Text style={[CommonStyles.descriptionStyle, { marginLeft: 20 }]}>
          You can add and edit daily, weekly and monthly recurring money
          transfer orders.
        </Text>

        <View style={{ marginTop: hp(70), alignSelf: "center" }}>
          <UndrawCalendarIcon
            color={appTheme === "dark" ? "#999999" : "#000"}
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
            styleText={{}}
            style={[{}]}
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
