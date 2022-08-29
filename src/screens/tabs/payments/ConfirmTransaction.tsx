import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import RegularText from "../../../components/text/RegularText";
import SegmentedInput from "../../../components/input/SegmentedInput";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import MyButton from "./sub-components/MyButton";
import { Text, View } from "../../../components/Themed";

export default function ConfirmTransaction({ navigation }: { navigation: { navigate: any } }) {
  return (
    <View style={[CommonStyles.parentContainer, styles.container]}>
      {/* <RegularText 
      style={styles.text}
      text=''/> */}

      <SegmentedInput headerText="Password" onValueChanged={() => {}} value="01234" secureInput={true} />
      <Text style={styles.seprate}>OR</Text>
      <Image style={styles.auth} source={require("../../../assets/images/auth.png")} />
      <Text style={styles.authText}>Authenticate with Face ID</Text>
      <MyButton
        style={styles.btn}
        disabled={false}
        title="Continue"
        onPress={() => {
          navigation.navigate("complete_transaction");
        }}
      />
      <TouchableOpacity style={styles.cancelContainer}>
        <RegularText style={styles.cancel} text="Cancel" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 90,
  },
  text: {
    fontWeight: "500",
    marginBottom: 50,
    fontSize: 14,
  },
  seprate: {
    textAlign: "center",
    color: "#A6A6A6",
  },
  auth: {
    width: 50,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    marginBottom: 10,
  },
  authText: {
    textAlign: "center",
    fontWeight: "400",
    color: "#A6A6A6",
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
    width: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cancelContainer: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 40,
  },
});
