import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { TextInput } from "../../theme/Themed";
import { View, Text } from "../../theme/Themed";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { WhatsappLogo } from "../../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Divider from "../../components/divider/Divider";

const ContactUsScreen = ({ navigation }: CommonScreenProps<"ContactUs">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.mainText}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
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
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
              marginTop: hp(20),
              marginBottom: hp(40),

              fontWeight: "400",
            }}
          >
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
              }}
            >
              Email
            </Text>
            <Text
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(16),
              }}
            >
              customersupport@aza.com
            </Text>
            <Divider />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              borderWidth: 1,
              borderColor: Colors[colorScheme].text,
              width: "90%",
              height: hp(50),
              borderRadius: hp(10),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={WhatsappLogo}
              style={{ marginRight: 10, width: hp(22), height: hp(23) }}
            />
            <Text
              style={{
                color: Colors[colorScheme].text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(14),
                fontWeight: "500",
              }}
            >
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
