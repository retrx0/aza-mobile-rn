import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { NairaIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { useAppSelector } from "../../../../hooks/redux";
import useColorScheme from "../../../../hooks/useColorScheme";
import { selectUser } from "../../../../redux/slice/userSlice";

export default function AccountDetails() {
  const colorScheme = useColorScheme();
  const [secure, setSecure] = useState(true);

  const user = useAppSelector(selectUser);

  return (
    <View style={[CommonStyles.col, { alignItems: "center" }]}>
      <TouchableOpacity onPress={() => setSecure(!secure)}>
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
            lightColor={"#000000"}
            darkColor={"#CCCCCC"}
            style={{ fontSize: 12 }}
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
            style={{ fontSize: 12 }}
          >
            NGN
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[CommonStyles.row]}>
        {secure ? (
          <>
            <NairaIcon
              size={25}
              color={
                colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text
              }
              style={{ marginRight: 2 }}
            />
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 24,
                marginVertical: 10,
              }}
            >
              {user.azaBalance}
            </Text>
          </>
        ) : (
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 24,
              marginVertical: 10,
            }}
          >
            **********
          </Text>
        )}
      </View>
      <View style={[CommonStyles.row]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 12,
          }}
        >
          Aza Number:
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            marginLeft: 3,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
          }}
        >
          {user.azaAccountNumber}
        </Text>
      </View>
    </View>
  );
}
