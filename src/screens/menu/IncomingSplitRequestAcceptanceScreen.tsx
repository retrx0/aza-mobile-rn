import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Divider from "../../components/divider/Divider";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IncomingSplitRequestAcceptanceScreen = ({
  navigation,
}: CommonScreenProps<"IncomingSplitRequestAcceptance">) => {
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
          Incoming Request
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
        <View
          style={{
            backgroundColor: "transparent",
            borderBottomWidth: 0.6,
            borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
          }}
        />
        <View>
          <View style={{ paddingVertical: hp(15), paddingHorizontal: hp(20) }}>
            <View
              style={[
                CommonStyles.row,
                {
                  alignItems: "center",
                  alignSelf: "stretch",
                },
              ]}>
              <Image
                style={{ borderRadius: 50, width: 36, height: 36 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTumpKjOB5PtCkHk3DUZ_6px9A073NcfLPA&usqp=CAU",
                }}
              />
              <View
                style={{
                  display: "flex",
                  marginRight: "auto",
                  marginLeft: hp(20),
                }}>
                <Text
                  // lightColor={Colors.light.mainText}
                  // darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(16),
                    fontWeight: "500",
                  }}>
                  Genesis Cinemas
                </Text>
                <View
                  style={[
                    CommonStyles.row,
                    {
                      marginTop: hp(3),
                      marginBottom: hp(8),
                      alignSelf: "flex-start",
                    },
                  ]}>
                  <Text
                    // lightColor={Colors.light.mainText}
                    // darkColor={Colors.dark.mainText}
                    style={{
                      marginLeft: hp(3),
                      fontFamily: "Euclid-Circular-A",
                      fontSize: hp(14),
                      fontWeight: "500",
                    }}>
                    Payments
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(16),
                    color: Colors.light.error,
                  }}>
                  {"\u20A6"} {numberWithCommas(20000)}
                </Text>
                <Text
                  lightColor={Colors.light.mainText}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontSize: hp(12),
                    marginTop: hp(3),
                    fontFamily: "Euclid-Circular-A",
                  }}>
                  4 July 2022 04:26
                </Text>
              </View>
            </View>
          </View>
          <Divider />
        </View>
        <View
          style={{
            marginTop: hp(30),
            paddingHorizontal: hp(20),
          }}>
          <Text
            // lightColor={Colors.light.secondaryText}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A",
              marginLeft: hp(5),
              fontWeight: "400",
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
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "500",
                }}>
                Chiazo
              </Text>
              <Text
                style={{
                  fontSize: hp(12),
                  marginTop: 5,
                  color: "#FF361A",
                  fontFamily: "Euclid-Circular-A-Medium",
                }}>
                {"\u20A6"}
                {numberWithCommas(6666)}
              </Text>
            </View>
          </View>
        </View>
        <Text
          // lightColor={Colors.light.secondaryText}
          // darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(20),
            marginTop: hp(30),
            fontWeight: "400",
          }}>
          Request Recipients
        </Text>
        <ScrollView>
          <View style={{}}>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  marginTop: hp(15),
                  paddingHorizontal: hp(20),
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
                    fontSize: hp(16),
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}>
                  James
                </Text>
                <Text
                  style={{
                    fontSize: hp(12),
                    marginTop: 5,
                    color: "#FF361A",
                    fontFamily: "Euclid-Circular-A-Medium",
                  }}>
                  {"\u20A6"}
                  {numberWithCommas(6666)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Accept Request"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage:
                  "You have successfully accepted the incoming split bill request",
                navigateTo: "IncomingSplitRequests",
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
          <CancelButtonWithUnderline
            title="Decline"
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default IncomingSplitRequestAcceptanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
