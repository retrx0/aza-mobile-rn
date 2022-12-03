import React from "react";
import { TouchableOpacity } from "react-native";
import { DangerIcon } from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

interface IProps {
  isBvnLinked: boolean;
}

export const LinkBVN = ({
  navigation,
  isBvnLinked,
}: RootTabScreenProps<"Home"> & IProps) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        marginTop: 50,
        backgroundColor: "#FAEB9E",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        display: isBvnLinked ? "none" : "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
      }}>
      <DangerIcon />
      <View
        style={{
          marginLeft: 10,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            color: colorScheme === "dark" ? "#000000" : "#000000",
          }}>
          Link your BVN to start using AZA
        </Text>
        <Text
          style={{
            fontSize: hp(12),
            color: colorScheme === "dark" ? "#000000" : "#000000",

            marginTop: 5,
          }}>
          Link your BVN to upgrade your account as there are certain limits on
          it.
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Common", {
              screen: "BvnVerification",
              params: {
                onVerifyNavigateBackTo: "Home",
              },
            })
          }>
          <View
            style={{
              backgroundColor: "transparent",
              borderBottomWidth: 1,
              paddingBottom: 1,
              marginTop: 10,
              alignSelf: "flex-start",
            }}>
            <Text
              style={{
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A-Medium",
                color: colorScheme === "dark" ? "#000000" : "#000000",
              }}>
              Link your BVN
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LinkBVN;
