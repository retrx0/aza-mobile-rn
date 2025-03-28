import React from "react";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import useColorScheme from "../../../../hooks/useColorScheme";
import { StyleSheet } from "react-native";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

interface IProps {
  toggleModal: () => void;
}

const BlockByAzaNumberTab = ({ toggleModal }: IProps) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(14),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
          }}>
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(14),
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            marginTop: hp(30),
          }}>
          You can unblock these users anytime
        </Text>
        <View style={{ marginTop: hp(50) }}>
          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            // placeholderTextColor={Colors[colorScheme].secondaryText}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 10,
              marginTop: hp(15),
              borderBottomWidth: 1,
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

              marginLeft: hp(5),
            }}
            placeholder="AZA Number"
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </View>
      </View>
    </View>
  );
};

export default BlockByAzaNumberTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
