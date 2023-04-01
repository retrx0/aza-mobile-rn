import React from "react";
import { Image } from "react-native";
import { NairaLargeIcon } from "../../../../assets/svg";
import CommonStyles from "../../../common/styles/CommonStyles";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import { View, Text } from "../../../theme/Themed";

import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { IUserState } from "../../../redux/types";

const SenderDetails = ({
  userData,
  amount,
}: {
  userData: IUserState;
  amount: string;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ borderRadius: 50, width: 50, height: 50 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
        }}
      />
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          fontSize: 14,
          marginTop: 15,
        }}
      >
        {userData.fullName}
      </Text>
      <View
        lightColor="#eaeaec"
        darkColor="#1D1D20"
        style={[
          CommonStyles.row,
          {
            marginVertical: 20,
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
          darkColor={"#CCCCCC"}
          style={{ fontSize: 12 }}
        >
          Nigerian Naira
        </Text>
        <Image
          style={{
            width: 15,
            height: 15,
            marginHorizontal: 10,
            resizeMode: "cover",
          }}
          source={require("../../../assets/images/icons/NigerianFlag.png")}
        />
        <Text
          lightColor={Colors.general.darkGrey}
          darkColor={"#CCCCCC"}
          style={{ fontSize: 12 }}
        >
          NGN
        </Text>
      </View>
      <View style={[CommonStyles.row]}>
        <NairaLargeIcon
          color={
            !amount
              ? Colors[colorScheme].secondaryText
              : Colors[colorScheme].mainText
          }
        />
        <Text
          style={{
            color: !amount
              ? Colors[colorScheme].secondaryText
              : Colors[colorScheme].mainText,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 36,
            marginVertical: 15,
          }}
        >
          {!amount && " 0"} {numberWithCommas(amount)}
        </Text>
      </View>
      <View style={[CommonStyles.row]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: 12,
          }}
        >
          Aza Balance:
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
          {"\u20A6"} {userData.azaBalance}
        </Text>
      </View>
    </View>
  );
};

export default SenderDetails;
