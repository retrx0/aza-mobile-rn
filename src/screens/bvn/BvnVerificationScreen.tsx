import React, { useLayoutEffect } from "react";
import BackButton from "../../components/buttons/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";

const BvnVerificationScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          Tier 1 Verification
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 14,
              marginVertical: hp(30),
            }}
          >
            Verify your BVN
          </Text>
          <View>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
              }}
            >
              BVN
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
              }}
              placeholder="Enter your bank verification number"
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
        </View>
        <View style={[CommonStyles.col, { marginBottom: hp(50) }]}>
          <Button
            title="Verify"
            onPressButton={() => navigation.navigate("BvnVerificationSuccess")}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.navigate("Root")}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
