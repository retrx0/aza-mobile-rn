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

const IncomingSplitRequestAcceptanceScreen = ({
  navigation,
}: CommonScreenProps<"IncomingSplitRequestAcceptance">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
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
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "transparent",
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />
        <View>
          <View style={{ paddingVertical: 15 }}>
            <View
              style={[
                CommonStyles.row,
                {
                  alignItems: "center",
                  alignSelf: "stretch",
                },
              ]}
            >
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
                  marginLeft: 20,
                }}
              >
                <Text
                  lightColor={Colors.light.mainText}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14,
                  }}
                >
                  Genesis Cinemas
                </Text>
                <View
                  style={[
                    CommonStyles.row,
                    {
                      marginTop: 3,
                      marginBottom: 8,
                      alignSelf: "flex-start",
                    },
                  ]}
                >
                  <Text
                    lightColor={Colors.light.mainText}
                    darkColor={Colors.dark.mainText}
                    style={{
                      marginLeft: 3,
                      fontSize: 12,
                      fontFamily: "Euclid-Circular-A",
                    }}
                  >
                    Payments
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 14,
                    color: Colors.light.error,
                  }}
                >
                  {"\u20A6"} {numberWithCommas(20000)}
                </Text>
                <Text
                  lightColor={Colors.light.mainText}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontSize: 10,
                    marginTop: 3,
                    fontFamily: "Euclid-Circular-A-Light",
                  }}
                >
                  4 July 2022 04:26
                </Text>
              </View>
            </View>
          </View>
          <Divider />
        </View>
        <View
          style={{
            marginTop: hp(25),
          }}
        >
          <Text
            lightColor={Colors.light.secondaryText}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: 14,
            }}
          >
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
            ]}
          >
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
              ]}
            >
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: 16,
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
              >
                Chiazo
              </Text>
              <Text style={{ fontSize: 12, marginTop: 5, color: "#FF361A" }}>
                {"\u20A6"} {numberWithCommas(6666)}
              </Text>
            </View>
          </View>
        </View>
        <Text
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: 14,
            marginTop: hp(25),
          }}
        >
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
                },
              ]}
            >
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
                ]}
              >
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontSize: 16,
                    fontFamily: "Euclid-Circular-A-Medium",
                  }}
                >
                  James
                </Text>
                <Text style={{ fontSize: 12, marginTop: 5, color: "#FF361A" }}>
                  {"\u20A6"} {numberWithCommas(6666)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={[CommonStyles.col, { width: "100%", marginBottom: hp(35) }]}
        >
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
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginVertical: 10,
              width: "100%",
              backgroundColor: Colors[colorScheme].button,
            }}
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
