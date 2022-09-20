import React from "react";
import { Image } from "react-native";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { Joseph } from "../../../../../assets/images";
import { hp } from "../../../../common/util/LayoutUtil";

export default function AccountBalance() {
  return (
    <View style={[CommonStyles.col, { alignItems: "center" }]}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={Joseph}
          resizeMode="cover"
          style={{ width: 50, height: 50, marginBottom: 10 }}
        />
        <Text
          style={{
            marginBottom: 16,
            fontSize: 14,
            fontFamily: "Euclid-Circular-A",
            fontWeight: "600",
          }}>
          Chiazondu Joseph
        </Text>
      </View>
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
        ]}>
        <Text
          lightColor={Colors.general.darkGrey}
          darkColor={Colors.dark.tabIconDefault}
          style={{ fontSize: 12, fontFamily: "Euclid-Circular-A" }}>
          Nigerian Naira
        </Text>
        <Image
          style={{ width: 15, height: 15, marginHorizontal: 10 }}
          source={require("../../../../../assets/images/icons/NigerianFlag.png")}
        />
        <Text
          lightColor={Colors.general.darkGrey}
          darkColor={Colors.dark.tabIconDefault}
          style={{ fontSize: 12, fontFamily: "Euclid-Circular-A" }}>
          NGN
        </Text>
      </View>
      <View style={{ marginTop: hp(37) }}>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 24,
            marginVertical: 5,
            textAlign: "center",
          }}>
          {"\u20A680,000"}
        </Text>
        <View style={[CommonStyles.row]}>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 12,
              fontFamily: "Euclid-Circular-A",
            }}>
            Aza Balance:
          </Text>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              marginLeft: 3,
              fontSize: 12,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontWeight: "600",
            }}>
            {"\u20A610,239,290.00"}
          </Text>
        </View>
      </View>
    </View>
  );
}
