import React from "react";
import { TouchableOpacity } from "react-native";
import { DangerIcon } from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";

interface IProps {
  isBvnLinked: boolean;
}

export const LinkBVN = ({
  navigation,
  isBvnLinked,
}: RootTabScreenProps<"Home"> & IProps) => {
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
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 12,
            color: Colors.general.darkGrey,
          }}>
          Link your BVN to start using AZA
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "black",
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
                fontSize: 14,
                fontFamily: "Euclid-Circular-A-Medium",
                color: Colors.general.primary,
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
