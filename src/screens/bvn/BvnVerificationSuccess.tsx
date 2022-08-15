import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/utils";
import Button from "../../components/buttons/Button";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { BvnVerificationSuccessIcon } from "../../../assets/svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BvnVerificationStackProps } from "./BvnVerificationNavigator";

const BvnVerificationSuccess = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View
          style={[
            CommonStyles.col,
            { alignItems: "center", marginTop: "auto", marginBottom: "auto" },
          ]}
        >
          <BvnVerificationSuccessIcon />
          <Text
            style={{
              color: "#2A9E17",
              fontSize: 24,
              marginVertical: 20,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
            }}
          >
            Successful
          </Text>
          <Text
            style={{
              color: Colors[colorScheme].text,
              fontSize: 14,
              textAlign: "center",
              fontFamily: "Euclid-Circular-A-Medium",
            }}
          >
            You have successfully linked your BVN to your Aza account
          </Text>
        </View>
        <View style={[CommonStyles.col, { marginBottom: hp(50) }]}>
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("Root")}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
            }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
