import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import { Input } from "../../../components/input/input";
import MyButton from "./sub-components/MyButton";
import { SafeAreaView, ScrollView } from "../../../theme/Themed";
import { View } from "../../../theme/components/View";
import { Text } from "../../../theme/components/Text";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../constants/Colors";
import Button from "../../../components/buttons/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { hp, wp } from "../../../common/util/LayoutUtil";
import { ImageInput } from "./sub-components/ImageInput";

export default function Confirmation({
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
          label={""}
          placeholder={""}
          source={undefined}
          icon={undefined}
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
          }}
          label="Phone Number"
          placeholder="08164942224"
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
          }}
          label="Amount"
          placeholder="N2,000 (Airtime)"
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
          }}
          label="Payment Method"
          placeholder="Aza Account"
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
            statusMessage: "Your internet purchase was successful",
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
          marginTop: hp(20),
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
    marginTop: hp(30),

    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontFamily: "Euclid-Circular-A",
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
