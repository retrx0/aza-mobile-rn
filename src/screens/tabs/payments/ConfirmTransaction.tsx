import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import { Input } from "../../../components/input/input";
import ImageInput from "./sub-components/ImageInput";
import MyButton from "./sub-components/MyButton";
import { SafeAreaView, ScrollView, Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../constants/Colors";
import Button from "../../../components/buttons/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";



export default function Confirmation({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
        <ScrollView style={[styles.container,{paddingTop:Platform.OS=='android'?100:70}]}>
        <Text style={styles.txt}>
          Kindly confirm the details of this transaction
        </Text>
        <ImageInput />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={null}
          label="Phone Number"
          placeholder="08164942224"
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={null}
          label="Amount"
          placeholder="N2,000 (Airtime)"
        />
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={null}
          label="Payment Method"
          placeholder="Aza Account"
        />
        <MyButton disabled={false} title="Confirm" onPress={() => {
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "Your internet purchase was successful",
                navigateTo: "Payments",
              });
            }}/>
          <CancelButtonWithUnderline
            onPressButton={() => {
              navigation.goBack();
            }}
            title="Cancel Transaction"
            style={{ borderBottomColor: Colors.general.red}}
            styleText={CommonStyles.cancelStyle}
          />
    </ScrollView>
     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingBottom:20

  },
  txt: {
    color: "#4D4D4D",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  btn: {
    marginTop: "auto",
    marginBottom: 0,
  },
  cancelContainer: {
    marginTop: 5,
  },
});
