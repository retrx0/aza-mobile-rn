import React from "react";
import { Image } from "react-native";
import { NairaIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

export default function AccountDetails() {
  const colorScheme = useColorScheme();

  return (
    <View style={[CommonStyles.col, { alignItems: "center" }]}>
      <View
        lightColor="#eaeaec"
        darkColor="#1D1D20"
        style={[
          CommonStyles.row,
          {
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          },
        ]}
      >
        <Text
          lightColor={Colors.general.darkGrey}
          darkColor={Colors.dark.tabIconDefault}
          style={{ fontSize: 12, fontFamily: "Euclid-Circular-A" }}
        >
          Nigerian Naira
        </Text>
        <Image
          style={{ width: 15, height: 15, marginHorizontal: 10 }}
          source={require("../../../../../assets/images/icons/NigerianFlag.png")}
        />
        <Text
          lightColor={Colors.general.darkGrey}
          darkColor={Colors.dark.tabIconDefault}
          style={{ fontSize: 12, fontFamily: "Euclid-Circular-A" }}
        >
          NGN
        </Text>
      </View>
      <View style={[CommonStyles.row]}>
        <NairaIcon
          size={25}
          color={Colors[colorScheme].mainText}
          style={{ marginRight: 2 }}
        />
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 24,
            marginVertical: 15,
          }}
        >
          2,239,290.00
        </Text>
      </View>
      <View style={[CommonStyles.row]}>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 12,
            fontFamily: "Euclid-Circular-A",
          }}
        >
          Aza Number:
        </Text>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            marginLeft: 3,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
          }}
        >
          1234567890
        </Text>
      </View>
    </View>
  );
}
