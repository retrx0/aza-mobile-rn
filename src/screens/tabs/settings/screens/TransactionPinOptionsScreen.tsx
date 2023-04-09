import React, { useEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import Divider from "../../../../components/divider/Divider";
import Colors from "../../../../constants/Colors";
import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { Text, View } from "../../../../theme/Themed";
import SettingsListItem from "../components/SettingsListItem";
import SettingsSwitch from "../components/SettingsSwitch";

const TransactionPinOptionsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionPinOptions">) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { isTransactionPinSet } = useAppSelector(selectUser);

  useNavigationHeader(navigation, `Transaction Pin`);

  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.transactionPinSwitch !== undefined &&
        setIsEnabled(setting?.transactionPinSwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ transactionPinSwitch: isEnabled });
  }, [isEnabled]);

  const pinScreenType = [
    {
      name: "Update Pin",
      handleNavigation: () =>
        navigation.navigate("TransactionPin", { type: "update" }),
    },
    {
      name: "Reset Pin",
      handleNavigation: () =>
        navigation.navigate("CurrentPassword", {
          onVerifyNavigateTo: "TransactionPin",
        }),
    },
  ];
  return (
    <SpacerWrapper>
      <View
        style={{ flex: 1, paddingVertical: hp(20), paddingHorizontal: hp(20) }}
      >
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
          }}
        >
          You can change your transaction pin settings
        </Text>
        {/* <View style={{ marginTop: hp(80) }}>
          <Divider />
          <SettingsSwitch
            text={"Enable Pin For Transactions"}
            isEnabled={isEnabled}
            onSwitchToggle={() => {
              setIsEnabled(!isEnabled);
            }}
          />
        </View> */}
        <View style={{ marginTop: hp(60) }}>
          <Divider />
          {!isTransactionPinSet && (
            <SettingsListItem
              name={"Set Pin"}
              handleNavigation={() =>
                navigation.navigate("TransactionPin", { type: "set" })
              }
            />
          )}

          {pinScreenType.map(({ name, handleNavigation }, i) => (
            <SettingsListItem
              name={name}
              handleNavigation={handleNavigation}
              key={i}
            />
          ))}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default TransactionPinOptionsScreen;
