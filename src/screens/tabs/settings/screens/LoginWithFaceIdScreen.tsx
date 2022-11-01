import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";

import { useAsyncStorage } from "../../../../hooks/useAsyncStorage";

const LoginWithFaceIdScreen = ({ navigation }: CommonScreenProps<"FaceId">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } = useAsyncStorage();
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Login with Face ID
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
    <View style={styles.container}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "400",
            marginLeft: hp(5),
          }}>
          You can access your account without entering a password by signing in
          with Face ID
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
  );
};

export default LoginWithFaceIdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
