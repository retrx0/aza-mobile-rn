import React, { useLayoutEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { Text2 as Text, View2 as View } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../../components/buttons/ExitButton";
import { AddUsers } from "../../../../../assets/svg";
import Button from "../../../../components/buttons/Button";

const CharitySupport = ({
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
          Charity
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
        <Image
          style={{
            width: hp(200),
            height: hp(200),
            alignSelf: "center",
            marginBottom: hp(59),
            marginTop: hp(59),

            resizeMode: "cover",
          }}
          source={require("../../../../../assets/images/common/CharityFeature.png")}
        />
        <Text
          style={{
            fontSize: hp(24),
            fontWeight: "600",
            fontFamily: "Euclid-Circular-A-Bold",
            textAlign: "center",

            alignSelf: "center",
            lineHeight: hp(30),
          }}
        >
          Personalized experience
        </Text>
        <Text
          style={{
            fontSize: hp(16),
            lineHeight: hp(25),
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            marginTop: hp(20),
            maxWidth: 350,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Learn more about the charities you support, and donate either in your
          name or someone else. Azarians can also setup a recurring transfer to
          automatically donate a certain amount to any charity of their choice
          at periodic time frames.
        </Text>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Go Back to Charity"
            onPressButton={() => navigation.navigate("Charity")}
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

export default CharitySupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
