import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import RegularText from "../../../../components/text/RegularText";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as style } from "./styles";
import ImageInput from "../sub-components/ImageInput";
import MyButton from "../sub-components/MyButton";
import { SafeAreaView, Text, View } from "../../../../components/Themed";
import FaceIdAlert from "../sub-components/FaceIdAlert";
export default function Confirmation({ navigation }: { navigation: { navigate: any } }) {
  const [confirmed, setConfirm] = useState(false);
  return (
    <SafeAreaView
      style={[CommonStyles.parentContainer, styles.container, { paddingTop: Platform.OS == "android" ? 100 : 0 }]}
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
          setConfirm(true);
          setTimeout(() => {
            navigation.navigate("complete_transaction");
            setConfirm(false);
          }, 3000);
        }}
      />
      <TouchableOpacity style={styles.cancelContainer}>
        <RegularText style={styles.cancel} text="Cancel Transaction" />
      </TouchableOpacity>

      {confirmed && <FaceIdAlert />}
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
