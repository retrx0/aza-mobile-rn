import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import { ScrollView, Text, View } from "../../../../components/Themed";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import { ImageInput } from "../sub-components/ImageInput";
import { Dstv, Ie } from "../../../../../assets/images";
import { CableTvIcon } from "../../../../../assets/svg";
import CableTvIndex from "./CableTvIndex";

export default function CableConfirmation({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[{ paddingTop: Platform.OS == "android" ? 100 : 100 }]}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.txt}>
          Kindly confirm the details of this transaction
        </Text>
        <ImageInput
          label={"To"}
          placeholder={"DSTV"}
          source={Dstv}
          icon={undefined}
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
            color: colorScheme === "dark" ? "#999999" : "#000000",
          }}
          label="Smart Card Number"
          placeholder="1234ueydjThs567890"
          placeholderTextColor={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
            color: colorScheme === "dark" ? "#999999" : "#000000",
          }}
          label="Amount"
          placeholder={"\u20A621,000 (DSTV Premium"}
          placeholderTextColor={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
            color: colorScheme === "dark" ? "#999999" : "#000000",
          }}
          label="Payment Method"
          placeholder="Aza Account"
          placeholderTextColor={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        />
      </View>
      <MyButton
        style={{ marginTop: hp(200), marginBottom: hp(5) }}
        disabled={false}
        title="Confirm"
        onPress={() => {
          navigation.navigate("StatusScreen", {
            statusIcon: "Success",
            status: "Successful",
            statusMessage: "Your TV subscription purchase was successful",
            navigateTo: "Payments",
          });
        }}
      />
      <CancelButtonWithUnderline
        onPressButton={() => {
          navigation.goBack();
        }}
        title="Cancel Transaction"
        style={{ borderBottomColor: Colors.general.red }}
        styleText={{
          textAlign: "center",
          color: Colors.general.red,
          fontSize: hp(16),
          fontWeight: "500",
          lineHeight: hp(17),
          fontFamily: "Euclid-Circular-A",
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  txt: {
    marginBottom: hp(40),
    marginTop: hp(20),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  btn: {
    marginTop: "auto",
    marginBottom: 0,
    width: "10%",
  },
  cancelContainer: {
    marginTop: 5,
  },
});
