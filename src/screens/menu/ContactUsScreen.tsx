import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { WhatsappLogo } from "../../../assets/images";

const ContactUsScreen = ({ navigation }: CommonScreenProps<"ContactUs">) => {
  const colorScheme = useColorScheme();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Contact Us
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
      <View style={styles.container}>
        <View>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(20),
              marginBottom: hp(40),
              marginLeft: hp(5),
              fontWeight: "600",
            }}>
            Contact us with any questions. We are ready to help
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
                marginLeft: hp(5),
              }}>
              Email
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              // placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                marginLeft: hp(5),
              }}
              placeholder="Enter your Email"
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.col,
            {
              marginBottom: hp(50),
              width: "95%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              borderWidth: 1,
              borderColor: Colors[colorScheme].text,
              width: "95%",
              height: hp(50),
              borderRadius: hp(10),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Image source={WhatsappLogo} style={{ marginRight: 10 }} />
            <Text
              style={{
                color: Colors[colorScheme].text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(14),
                fontWeight: "500",
              }}>
              Whatsapp Customer Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
