import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import { Input } from "../../../components/input/input";
import ImageInput from "./sub-components/ImageInput";
import MyButton from "./sub-components/MyButton";
import { SafeAreaView, Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
export default function Confirmation({ navigation }: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  return (
    <SafeAreaView
      style={[CommonStyles.parentContainer, styles.container, { paddingTop: Platform.OS == "android" ? 100 : 20 }]}
    >
      <Text style={styles.txt}>Kindly confirm the details of this transaction</Text>
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

      <MyButton
        style={styles.btn}
        disabled={false}
        title="Confirm"
        onPress={() => {
            navigation.navigate("StatusScreen", { 
              statusIcon: "Success",
              status: "Successful",
              statusMessage:"Your internet purchase was successful",
             });
        }}
      />
      <TouchableOpacity style={styles.cancelContainer}>
        <Text style={styles.cancel}>Cancel Transaction</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  cancel: {
    textAlign: "center",
    color: "#FF361A",
    borderBottomColor: "#FF361A",
    borderBottomWidth: 1,
    width: 140,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cancelContainer: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
});
