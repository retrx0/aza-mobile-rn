import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Divider from "../../components/divider/Divider";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";

import {
  ChevronRightIcon,
  ReceivedIcon,
  SendIcon,
  SplitIcon,
} from "../../../assets/svg";

const SplitScreen = ({ navigation }: CommonScreenProps<"Split">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(18),
            fontWeight: "500",
          }}>
          Split
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

  const navigationListItems = [
    {
      name: "Split",
      handleNavigation: () => navigation.navigate("ChooseSplit"),
      icon: <SplitIcon size={18} color={Colors[colorScheme].mainText} />,
    },
    {
      name: "Incoming Requests",
      handleNavigation: () => navigation.navigate("IncomingSplitRequests"),
      icon: <ReceivedIcon size={18} color={Colors[colorScheme].mainText} />,
    },
    {
      name: "Outgoing Requests",
      handleNavigation: () => navigation.navigate("OutgoingSplitRequests"),
      icon: <SendIcon size={18} color={Colors[colorScheme].mainText} />,
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Divider />
        {navigationListItems.map(({ name, icon, handleNavigation }, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={handleNavigation}
              style={[CommonStyles.col, { alignSelf: "stretch" }]}>
              <View
                style={[
                  CommonStyles.row,
                  {
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    marginVertical: hp(20),
                  },
                ]}>
                <View>{icon}</View>
                <View
                  style={[
                    CommonStyles.col,
                    { marginRight: "auto", marginLeft: 20 },
                  ]}>
                  <Text
                    // lightColor={Colors.light.text}
                    // darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                    }}>
                    {name}
                  </Text>
                </View>
                <ChevronRightIcon color={"#2A9E17"} size={20} />
              </View>
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SplitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
