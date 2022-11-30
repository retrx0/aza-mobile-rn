import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Divider from "../../components/divider/Divider";
import Button from "../../components/buttons/Button";
import SplitListItem from "./components/SplitListItem";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { numberWithCommas } from "../../common/util/NumberUtils";
import SplitPaymentStatus from "./components/SplitPaymentStatus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OutgoingSplitRequestsScreen = ({
  navigation,
}: CommonScreenProps<"OutgoingSplitRequests">) => {
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
          }}>
          Outgoing Requests
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
        <Divider />
        <SplitListItem
          amount="480000"
          date="4 July 2022 04:26"
          name="Genesis Cinemas"
          splitImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCw2MbJZQFCcrpjKNlU9z6nui49AWU1_ugpJSQ_wnCQ&s"
        />
        <Divider />
        <View
          style={{
            marginTop: hp(25),
          }}>
          <Text
            // lightColor={Colors.light.secondaryText}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(16),
              fontWeight: "400",
              fontFamily: "Euclid-Circular-A",
              marginLeft: hp(5),
            }}>
            Request Creator
          </Text>
          <View
            style={[
              CommonStyles.row,
              {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: hp(15),
              },
            ]}>
            <Image
              style={{ borderRadius: 50, width: 45, height: 45 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
              }}
            />
            <View
              style={[
                CommonStyles.col,
                { marginLeft: 20, marginRight: "auto" },
              ]}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(15),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "500",
                }}>
                Chiazo
              </Text>
              <Text
                style={{
                  fontSize: hp(14),
                  marginTop: 5,
                  color: "#FF361A",
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "500",
                }}>
                {"\u20A6"}
                {numberWithCommas(6666)}
              </Text>
            </View>
            <SplitPaymentStatus paid={true} />
          </View>
        </View>
        <Text
          // lightColor={Colors.light.secondaryText}
          // darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: hp(16),
            fontWeight: "400",
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(5),
            marginTop: hp(25),
          }}>
          Request Recipients
        </Text>
        <ScrollView>
          <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  marginTop: hp(15),
                },
              ]}>
              <Image
                style={{ borderRadius: 50, width: 45, height: 45 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                }}
              />
              <View
                style={[
                  CommonStyles.col,
                  { marginLeft: 20, marginRight: "auto" },
                ]}>
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontSize: hp(15),
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}>
                  James
                </Text>
                <Text
                  style={{
                    fontSize: hp(14),
                    marginTop: 5,
                    color: "#FF361A",
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}>
                  {"\u20A6"}
                  {numberWithCommas(6666)}
                </Text>
              </View>
              <SplitPaymentStatus paid={true} />
            </View>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  marginTop: hp(15),
                },
              ]}>
              <Image
                style={{ borderRadius: 50, width: 45, height: 45 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                }}
              />
              <View
                style={[
                  CommonStyles.col,
                  { marginLeft: 20, marginRight: "auto" },
                ]}>
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontSize: hp(15),
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}>
                  James
                </Text>
                <Text
                  style={{
                    fontSize: hp(14),
                    marginTop: 5,
                    color: "#FF361A",
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}>
                  {"\u20A6"}
                  {numberWithCommas(6666)}
                </Text>
              </View>
              <SplitPaymentStatus paid={false} />
            </View>
          </View>
        </ScrollView>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Cancel Request"
            onPressButton={() => navigation.navigate("Split")}
            styleText={{
              color: colorScheme === "dark" ? "#FFFFFF" : "#FFFFFF",
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].error,
              },
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default OutgoingSplitRequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
