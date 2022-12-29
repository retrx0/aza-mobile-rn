import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../../components/buttons/ExitButton";
import Button from "../../../../components/buttons/Button";
import { RootTabScreenProps } from "../../../../../types";

const VaultFeature = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
            justifyContent: "space-between",
            paddingHorizontal: 20,
            // alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              textAlign: "center",
              marginLeft: hp(160),
            }}
          >
            Vault
          </Text>
          <ExitButton onPress={() => navigation.goBack()} />
        </View>

        <Image
          style={{
            width: hp(150),
            height: hp(150),
            alignSelf: "center",
            marginBottom: hp(81),
            marginTop: hp(81),
          }}
          source={require("../../../../../assets/images/common/VaultFeature.png")}
        />

        <Text
          style={{
            fontSize: hp(24),
            fontWeight: "600",
            fontFamily: "Euclid-Circular-A-Bold",
            textAlign: "center",
            // maxWidth: 350,
            alignSelf: "center",
            lineHeight: hp(30),
          }}
        >
          Stay financially-disciplined
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
          Save and Lockup your funds towards a particular goal, at any time
          frame of your choice.
        </Text>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultLiberty",
              })
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

export default VaultFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
