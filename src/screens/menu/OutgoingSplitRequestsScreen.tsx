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

const OutgoingSplitRequestsScreen = ({
  navigation,
}: CommonScreenProps<"OutgoingSplitRequests">) => {
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
          name="KFC"
          splitImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwr_jykU8Gdf9mpFXyUFwKAbCEaLFPFJbfA&usqp=CAU"
        />
        <Divider />
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
            <SplitPaymentStatus paid={true} />
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
          <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
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
              <SplitPaymentStatus paid={false} />
            </View>
          </View>
        </ScrollView>
        <View
          style={[CommonStyles.col, { width: "100%", marginBottom: hp(35) }]}
        >
          <Button
            title="Cancel Request"
            onPressButton={() => navigation.navigate("Split")}
            styleText={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginVertical: 10,
              width: "100%",
              marginBottom: hp(40),
              marginTop: hp(40),
              backgroundColor: Colors[colorScheme].error,
            }}
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
