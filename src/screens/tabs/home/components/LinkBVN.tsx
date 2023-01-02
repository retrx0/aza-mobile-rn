import React from "react";
import { TouchableOpacity } from "react-native";
import { DangerIcon } from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import { View as View, Text2 as Text } from "../../../../theme/Themed";

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
      }}
    >
      <DangerIcon />
      <View
        style={{
          marginLeft: 10,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <Text
          darkColor={Colors["dark"].Text}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}
        >
          Link your BVN to start using AZA
        </Text>
        <Text
          darkColor={Colors["dark"].Text}
          style={{
            fontSize: hp(12),
            marginTop: 5,
          }}
        >
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
          }
        >
          <View
            style={{
              backgroundColor: "transparent",
              borderBottomWidth: 1,
              paddingBottom: 1,
              marginTop: 10,
              alignSelf: "flex-start",
            }}
          >
            <Text
              darkColor={Colors["dark"].Text}
              style={{
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A-Medium",
              }}
            >
              Link your BVN
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LinkBVN;
