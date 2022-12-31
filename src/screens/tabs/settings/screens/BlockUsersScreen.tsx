import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UndrawCancelIcon } from "../../../../../assets/svg";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BlockUsersScreen = ({ navigation }: CommonScreenProps<"BlockUsers">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

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
          }}
        >
          Block Users
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
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
            }}
          >
            Blocked users won't be able to send you money, request money from
            you or split payments with you.
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              marginTop: hp(30),
            }}
          >
            You can unblock these users anytime
          </Text>
        </View>
        <View style={{ alignSelf: "center", marginTop: hp(40) }}>
          <UndrawCancelIcon size={30} />
          <Text
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(30),
              textAlign: "center",
            }}
          >
            You have not blocked anyone
          </Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Block A User"
            onPressButton={() => navigation.navigate("BlockNewUser")}
            styleText={{}}
            style={[CommonStyles.button]}
          />
          <ButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BlockUsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
