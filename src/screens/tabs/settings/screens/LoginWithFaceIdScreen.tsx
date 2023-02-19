import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const LoginWithFaceIdScreen = ({ navigation }: CommonScreenProps<"FaceId">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [isLoginWithFaceId, setLoginWithFaceId] = useState<boolean>(false);
  const [isConfirmTransactionWithFaceId, setConfirmTransactionWithFaceId] =
    useState<boolean>(false);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      if (setting?.loginWithFaceIDSwitch !== undefined) {
        setLoginWithFaceId(setting?.loginWithFaceIDSwitch);
      }
      if (setting?.confirmTransactionsWithFaceIDSwitch !== undefined) {
        setConfirmTransactionWithFaceId(
          setting?.confirmTransactionsWithFaceIDSwitch
        );
      }
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({
      loginWithFaceIDSwitch: isLoginWithFaceId,
      confirmTransactionsWithFaceIDSwitch: isConfirmTransactionWithFaceId,
    });
  }, [isLoginWithFaceId, isConfirmTransactionWithFaceId]);

  useNavigationHeader(navigation, "Login with Face ID");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          >
            You can access your account without entering a password by signing
            in with Face ID
          </Text>
        </View>
        <View style={{ marginTop: hp(100) }}>
          <Divider />
          <SettingsSwitch
            text={"Login with Face ID"}
            isEnabled={isLoginWithFaceId}
            onSwitchToggle={() => setLoginWithFaceId(!isLoginWithFaceId)}
          />
          <SettingsSwitch
            text={"Confirm transactions with Face ID"}
            isEnabled={isConfirmTransactionWithFaceId}
            onSwitchToggle={() =>
              setConfirmTransactionWithFaceId(!isConfirmTransactionWithFaceId)
            }
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default LoginWithFaceIdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
