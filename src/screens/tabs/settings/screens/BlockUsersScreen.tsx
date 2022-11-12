import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UndrawCancelIcon } from "../../../../../assets/svg";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

const BlockUsersScreen = ({ navigation }: CommonScreenProps<"BlockUsers">) => {
  const colorScheme = useColorScheme();

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
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              marginLeft: hp(5),
              fontWeight: "500",
            }}>
            Blocked users won't be able to send you money, request money from
            you or split payments with you.
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A",
              marginLeft: hp(5),
              fontWeight: "400",
              marginTop: hp(30),
            }}>
            You can unblock these users anytime
          </Text>
        </View>
        <View style={[CommonStyles.col]}>
          <UndrawCancelIcon
            color={colorScheme === "dark" ? "#2AD168" : "#000000"}
            size={30}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(30),
            }}>
            You have not blocked anyone
          </Text>
        </View>

        <View style={{ marginBottom: hp(25) }}>
          <Button
            title="Block A User"
            onPressButton={() => navigation.navigate("BlockNewUser")}
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
    paddingHorizontal: 15,
  },
});
