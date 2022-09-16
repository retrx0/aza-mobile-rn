import React from "react";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { Text, TextInput, View } from "../../../../components/Themed";
import useColorScheme from "../../../../hooks/useColorScheme";
import { StyleSheet } from "react-native";

interface IProps {
  toggleModal: () => void;
}

const BlockByAzaNumberTab = ({ toggleModal }: IProps) => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}
        >
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginTop: hp(30),
          }}
        >
          You can unblock these users anytime
        </Text>
        <View style={{ marginTop: hp(50) }}>
          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            placeholderTextColor={Colors[colorScheme].secondaryText}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 10,
              marginTop: hp(15),
              borderBottomWidth: 1,
              borderBottomColor: Colors[colorScheme].separator,
            }}
            placeholder="Aza Number"
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
    paddingHorizontal: 15,
  },
});
